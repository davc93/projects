import { getStorage, ref, StorageReference, uploadBytes, getDownloadURL } from "firebase/storage"
import { ProjectDto } from "../models"
import { collection, addDoc } from 'firebase/firestore'
import { db } from "./config"

const storage = getStorage()
const storageRef = ref(storage)
const featuresImgRef = ref(storageRef, 'featuresImages')


const getUrl = async (ref:StorageReference) => {
    const url = await getDownloadURL(ref)
    return url
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
            const docRef = await addDoc(collection(db, 'projects'), {
                ...project,
                featureImage: url
            })
            console.log(docRef)
        }
        const docRef = await addDoc(collection(db, 'projects'), {
            ...project,
            featureImage: null

        })
        console.log("Documento escrito con exito", docRef.id);
    } catch (error) {
        console.log('Ha habido un error')
        console.log(error)
    }

}

export const getProjects = async () => {


}

export const getProject = async () => {


}