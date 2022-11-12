import React from "react";
import { getDocs ,collection} from 'firebase/firestore'
import { db } from "../firebase/config";
import { Tech } from "../models";
export const useGetTechs = () => {

    const [techs, setTechs]:any = React.useState([]);
    React.useEffect(()=>{
        const getTechs = async () => {
            const techQuery:Tech[] = []
            const querySnapshot = await getDocs(collection(db,'techs'));
            querySnapshot.forEach((doc:any)=>{
                techQuery.push({...doc.data(),id:doc.id})
            })
            setTechs(techQuery)
        }
        getTechs()
        
    },[])
    
    return techs
}