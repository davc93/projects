import React from 'react'
import { uploadProject } from '../../hooks/uploadProject'
import './styles.css'
export const ProjectForm = () => {
    // (e)=> uploadProject({
    //     name:'project1',
    //     description:'descripcion',
    //     repoLink:'https://localhost',
    //     envLink:'https://localhost', 
    //     featureImage: e.target.files[0]})
    const handleSubmit = async () => {



    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="projectName" id="" placeholder='Nombre del proyecto' />
        <textarea name='projectDescription' placeholder='Descripcion'></textarea>
        <input type="text" name="repoLink" placeholder='Repo link' />
        <input type="text" name="envLink" placeholder='Env Link' />
        <input type="file" name="featureImage"/>
        <button type="submit">Subir Proyecto</button>
    </form>
  )
}
