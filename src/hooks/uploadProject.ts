import { getStorage, ref, uploadBytes } from "firebase/storage"
import { Project } from "../models"
import {collection,addDoc} from 'firebase/firestore'
import { db } from "../firebase/config"

const storage = getStorage()
const storageRef = ref(storage)
const featuresImgRef = ref(storageRef,'featuresImages')
export const uploadProject = async (project:Project) => {
    
    const {
        featureImage
    } = project
    const spaceRef = ref(featuresImgRef, featureImage?.name);

    try {

        if(featureImage){

            const snapshot = await uploadBytes(spaceRef,featureImage)
            console.log(snapshot);
            console.log('Archivo subido')
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