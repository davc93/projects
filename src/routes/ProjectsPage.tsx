import React from 'react'
import { context } from '../context'
import { ListOfProjects } from '../components/ListOfProjects'
export const ProjectsPage = () => {
  
  return (
    <main className='mx-3'>
      <h1 className='text-center'>Projects</h1>
      <ListOfProjects />
    </main>

  )
}
