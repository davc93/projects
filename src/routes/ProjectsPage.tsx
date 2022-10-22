import React from 'react'
import { context } from '../context'
import { ListOfProjects } from '../components/ListOfProjects'
export const ProjectsPage = () => {
  
  return (
    <main className='pt-24 mx-3'>
      <h1>Projects</h1>
      <ListOfProjects />
    </main>

  )
}
