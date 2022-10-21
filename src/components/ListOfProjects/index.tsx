import React, { useContext } from 'react'
import { context } from '../../context'
import { Project } from '../../models'
import { ProjectCard } from '../ProjectCard'
export const ListOfProjects = () => {
    const {projects}:Project[] = useContext(context);
    console.log(projects)
  return (
    <section>
        {projects.map((project:Project)=>{
            return (
                <ProjectCard key={project.name} {...project} />
            )
        })}
    </section>
  )
}
