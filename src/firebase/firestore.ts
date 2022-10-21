import { getStorage, ref, StorageReference, uploadBytes } from "firebase/storage"
import { Project } from "../models"
import {collection,addDoc} from 'firebase/firestore'
import { db } from "./config"

const storage = getStorage()
const storageRef = ref(storage)
const featuresImgRef = ref(storageRef,'featuresImages')

export const uploadFile = async (ref: StorageReference, file:File) => {
  const snapshot = await uploadBytes(ref,file)
  console.log(snapshot);
  console.log('Archivo subido')
}

export const uploadProject = async (project:Project) => {
    
    const {
        featureImage
    } = project
    const spaceRef = ref(featuresImgRef, featureImage?.name);

    try {

        if(featureImage){
          uploadFile(spaceRef,featureImage)
        }
        const docRef = await addDoc(collection(db,'projects'),{
            ...project,
            featureImage:spaceRef.fullPath || null
    
        })
        console.log("Documento escrito con exito",docRef.id);
    } catch (error) {
        console.log('Ha habido un error')
        console.log(error)
    }

}