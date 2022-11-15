import React from "react";
import { getDocs ,collection, getDoc, doc} from 'firebase/firestore'
import { db } from "../firebase/config";
import { Project, Tech } from "../models";
export const useGetProjects = () => {

    const [projects, setProjects]:any = React.useState([]);
    React.useEffect(()=>{
        const getTechs = (techs:string[]) => {
            const techsResolved:Tech[] = []
            techs.forEach((tech)=>{
                
                getDoc(doc(db,"techs",tech)).then((response:any)=>{
                    techsResolved.push(response.data())
                })
            })
            return techsResolved
        }

        const getProjects = async () => {
            const projectQuery:Project[] = []
            
            const querySnapshot = await getDocs(collection(db,'projects'));
            querySnapshot.forEach((doc:any)=>{
                

                const project = doc.data()
                if(project.techs){
                    project.techs = getTechs(project.techs) 
                }
                projectQuery.push(project)
            })
            setProjects(projectQuery)
        }

        getProjects()

        
    },[])
    console.log(projects);
    
    
    return projects
}