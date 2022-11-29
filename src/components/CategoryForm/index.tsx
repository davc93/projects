import React from 'react'

export const CategoryForm = () => {
  const handleSubmit = () => {

  }
  return (
    <form onSubmit={handleSubmit} className='simple-form'>
        <label>Categoria</label>
        <input type="text" name="category" placeholder='nombre de la categoria'/>
        <button className='btn btn--primary' type="submit">Subir Categoria</button>
    </form>
  )
}
