import React, { FormEvent } from 'react'
import { uploadProject } from '../../firebase/firestore'
import './styles.css'
export const ProjectForm = () => {

  const [data, setdata]:any = React.useState({
    name:'',
    description:'',
    repoLink:'',
    envLink:'',
    featureImage: null

  })
  const handleChange = (event:any) => {
    if(event.target.files){
      console.log('es un archivos')
      data["featureImage"] = event.target.files[0]
    } else {
    
      const id = event.target.id
      const value = event.target.value
      data[id] = value
    }
      
    console.log(data)
  }
  const handleSubmit = async (event:any) => {
    event.preventDefault()
    try {
      const response = await uploadProject(data);
      console.log(response);
      event.target.reset()
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} >
        <input type="text" name="projectName" id="name" placeholder='Nombre del proyecto' />
        <textarea name='projectDescription' id='description' placeholder='Descripcion'></textarea>
        <input type="text" name="repoLink" id='repoLink' placeholder='Repo link' />
        <input type="text" name="envLink" id='envLink' placeholder='Env Link' />
        <input type="file" name="featureImage" id='featureImage'/>
        <button type="submit">Subir Proyecto</button>
    </form>
  )
}
