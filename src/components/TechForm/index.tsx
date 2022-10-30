import React from 'react'

export const TechForm = () => {
    const handleSubmit = () => {
    
    }
  return (
    <form onSubmit={handleSubmit} className='simple-form'>
        <input type="text" name="tech" placeholder='nombre de la tecnologia' />
        <input type="file" name="techImage" placeholder='imagen de la tecnologia'/>
        <button className='btn btn--primary' type="submit">Subir Tech</button>
    </form>
  )
}
