import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Project, Tech } from "../models";

const getProjects = async () => {
  const projectQuery: Project[] = [];
  const querySnapshot = await getDocs(collection(db, "projects"));

  querySnapshot.forEach((doc: any) => {
    const projectWithoutTech = doc.data();
    projectQuery.push(projectWithoutTech);
    // const data = techs.map((firestoreDoc) => firestoreDoc.data());
  });
  return projectQuery
};

const getTechs = (project) => {
    return new Promise(async (resolve,reject)=>{
        const techsPromises = project.techs.map((tech)=>{
            return getDoc(doc(db, "techs", tech)).then((result)=> result.data());
        })
        Promise.all(techsPromises).then((values)=>{
            resolve(values)
        })


    })
}

const getCompleteProjects = async () => {

    return new Promise(async (resolve, reject) => {
        const projectsWithoutTechs = await getProjects()
        projectsWithoutTechs.forEach((project)=>{
            const techs = getTechs(project)
            project.techs = techs
            
        })
        projectsWithoutTechs.forEach((project)=>{
            project.techs.then((result)=>{
                project.techs = result
                if(projectsWithoutTechs.indexOf(project) === projectsWithoutTechs.length -1){
                    console.log(project)
                    resolve(projectsWithoutTechs)
                    
                } 
            })
        })
    });
    


    // const projects = await getProjectsWithTechs(projectsWithoutTechs)
    

};

export { getCompleteProjects };