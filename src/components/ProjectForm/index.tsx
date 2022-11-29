import React, { FormEvent } from 'react'
import { uploadProject } from '../../firebase/firestore'
import { useGetTechs } from '../../hooks/useGetTechs'
import { Tech } from '../../models'
import './styles.css'
export const ProjectForm = () => {
  const techs = useGetTechs()
  console.log(techs)
  const [data, setdata]: any = React.useState({
    name: '',
    description: '',
    repoLink: '',
    envLink: '',
    techs: [],
    featureImage: null

  })
  const handleChange = (event: any) => {
    if (event.target.files) {
      console.log('es un archivos')
      setdata({ ...data, featureImage: event.target.files[0] })
    }

    if (event.target.selectedOptions) {
      const techs = [...event.target.selectedOptions]
      const techsClean = techs.map((tech) => tech.value)
      console.log(techsClean)
      setdata({ ...data, techs: techsClean })
    } else {
      const id = event.target.id
      const value = event.target.value
      data[id] = value
    }
  }
  const handleSubmit = async (event: any) => {
    console.log(data)
    event.preventDefault()
    // console.log(data)
    try {
      const response = await uploadProject(data)
      console.log(response)
      event.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className='simple-form' >
        <input type="text" name="projectName" id="name" placeholder='Nombre del proyecto' />
        <textarea name='projectDescription' id='description' placeholder='Descripcion'></textarea>
        <input type="text" name="repoLink" id='repoLink' placeholder='Repo link' />
        <input type="text" name="envLink" id='envLink' placeholder='Env Link' />
        <input type="file" name="featureImage" id='featureImage'/>

      <select multiple id='techs'>
        {techs.map((tech: Tech) => (

          <option key={tech.id} value={tech.id}>{tech.name}</option>

        ))}
      </select>
        <button className='btn btn--primary' type="submit">Subir Proyecto</button>
    </form>
  )
}
