import React, { useContext } from 'react'
import { context } from '../../context'
import { Project } from '../../models'
import { ProjectCard } from '../ProjectCard'
export const ListOfProjects = () => {
  const { projects }: any = useContext(context)
  console.log(projects)

  return (
    <section className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:mx-8'>
        {projects.map((project: Project) => {
          return (
                <ProjectCard key={project.name} {...project} />
          )
        })}
    </section>
  )
}
