import React from 'react'
import { uploadTech } from '../../firebase/firestore'

export const TechForm = () => {
  const [tech, setTech]: any = React.useState({})
  const handleSubmit = (event: any) => {
    event.preventDefault()
    uploadTech(tech)
    event.target.reset()
  }
  const handleChange = (event: any) => {
    setTech({ name: event.target.value })
    console.log(tech)
  }
  return (
    <form onSubmit={handleSubmit} className='simple-form' onChange={handleChange}>
        <input type="text" name="tech" placeholder='nombre de la tecnologia' />
        <button className='btn btn--primary' type="submit">Subir Tech</button>
    </form>
  )
}
