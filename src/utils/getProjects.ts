import { getDocs, collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Project, Tech } from '../models'

const getProjects = async () => {
  const projectQuery: Project[] = []
  const querySnapshot = await getDocs(collection(db, 'projects'))

  querySnapshot.forEach((doc: any) => {
    const projectWithoutTech = doc.data()
    projectQuery.push(projectWithoutTech)
  })
  return projectQuery
}

const getTechs = async (project: Project) => {
  return await new Promise(async (resolve, reject) => {
    const techsPromises = project.techs.map(async (tech: any) => {
      return await getDoc(doc(db, 'techs', tech)).then((result) => result.data())
    })
    Promise.all(techsPromises).then((values) => {
      resolve(values)
    })
  })
}

const getCompleteProjects = async () => {
  return await new Promise(async (resolve, reject) => {
    const projectsWithoutTechs = await getProjects()
    projectsWithoutTechs.forEach((project: any) => {
      const techs = getTechs(project)
      project.techs = techs
    })
    projectsWithoutTechs.forEach((project: any) => {
      project.techs.then((result: Project) => {
        project.techs = result
        if (
          projectsWithoutTechs.indexOf(project) ===
          projectsWithoutTechs.length - 1
        ) {
          resolve(projectsWithoutTechs)
        }
      })
    })
  })
}

export { getCompleteProjects }
