import * as functions from 'firebase-functions';
import { Storage } from '@google-cloud/storage';
import * as path from 'path'
import * as sharp from 'sharp'

const THUMB_MAX_WIDTH = 400;
const gcs = new Storage();


exports.generateThumbnail = functions.storage.object().onFinalize((object) => {

    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const filePath:any = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.

    // Exit if this is triggered on a file that is not an image.
    if (!contentType?.startsWith('image/')) {
        functions.logger.log('This is not an image.');
        return null;
    }

    const fileName = path.basename(filePath);
    // Exit if the image is already a thumbnail.
    if (fileName.startsWith('thumb_')) {
        functions.logger.log('Already a Thumbnail.');
        return null;
    }

    // Download file from bucket.
    const bucket = gcs.bucket(fileBucket);

    const metadata = {
        contentType: contentType,
    };
    // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    const thumbFileName = `thumb_${fileName}`;
    const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
    // Create write stream for uploading thumbnail
    const thumbnailUploadStream = bucket.file(thumbFilePath).createWriteStream({ metadata });

    // Create Sharp pipeline for resizing the image and use pipe to read from bucket read stream
    const pipeline = sharp();
    pipeline.resize({width:THUMB_MAX_WIDTH}).pipe(thumbnailUploadStream);
    bucket.file(filePath).createReadStream().pipe(pipeline);
    return new Promise((resolve, reject) =>
      thumbnailUploadStream.on('finish', resolve).on('error', reject));
})



