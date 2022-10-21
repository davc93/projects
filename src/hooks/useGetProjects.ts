import React from "react";
import { getDocs ,collection} from 'firebase/firestore'
import { db } from "../firebase/config";
import { Project } from "../models";
export const useGetProjects = () => {

    const [projects, setProjects]:any = React.useState([]);
    React.useEffect(()=>{
        const getProjects = async () => {
            const projectQuery:Project[] = []
            const querySnapshot = await getDocs(collection(db,'projects'));
            querySnapshot.forEach((doc:any)=>{
                projectQuery.push(doc.data())
            })
            setProjects(projectQuery)
        }
        getProjects()
        
    },[])
    
    
    
    return projects
}