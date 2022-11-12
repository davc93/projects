import { getStorage, ref, StorageReference, uploadBytes, getDownloadURL } from "firebase/storage"
import { ProjectDto, Tech } from "../models"
import { collection, addDoc } from 'firebase/firestore'
import { db } from "./config"

const storage = getStorage()
const storageRef = ref(storage)
const featuresImgRef = ref(storageRef, 'featuresImages')


const getUrl = async (ref:StorageReference) => {
    const url = await getDownloadURL(ref)
    return url
}

export const uploadTech = async (tech:Tech)=>{
    try {
        const doc = await addDoc(collection(db, 'techs'),
        
    
        tech
    )
    console.log(doc);        
    } catch (error) {
        console.log(error);
    }

}
export const uploadFile = async (ref: StorageReference, file: File) => {
    await uploadBytes(ref, file)
    const url = await getUrl(ref)
    return url
}

export const uploadProject = async (project: ProjectDto) => {

    const { featureImage } = project
    try {

        if (featureImage) {
            const spaceRef = ref(featuresImgRef, featureImage.name);
            const url = await uploadFile(spaceRef, featureImage)
            const thumbName = `thumb_${featureImage.name}`
            const urlThumb = [...url.split(featureImage.name)].join(thumbName)
            console.log(urlThumb)
            
            const docRef = await addDoc(collection(db, 'projects'), {
                ...project,
                featureImage: urlThumb
            })

            console.log(docRef)
        } else {
            const docRef = await addDoc(collection(db, 'projects'), {
                ...project,
                featureImage: null
    
            })
            console.log("Documento escrito con exito", docRef.id);
        }

    } catch (error) {
        console.log('Ha habido un error')
        console.log(error)
    }

}
