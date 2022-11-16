import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectDetail } from '../components/ProjectDetail'
import { context } from '../context'
import { useGetProjects } from '../hooks/useGetProjects'
import { Project } from '../models'

export const ProjectPage = () => {
  const {projects}:any = useContext(context)
  const {slug} = useParams()
  const projectSearched = projects.find((project:Project)=> project.name.replaceAll(' ','-').toLowerCase() == slug )
  console.log(projectSearched);
  // project.name.replaceAll('-',' ')
  return (
    <main >
      <section className='p-4 lg:p-8'>
        <ProjectDetail {...projectSearched} />
      </section>
    </main>
  )
}
