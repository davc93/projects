import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectDetail } from '../components/ProjectDetail'
import { context } from '../context'
import { useGetProjects } from '../hooks/useGetProjects'
import { Project } from '../models'

export const ProjectPage = () => {
  const {projects}:any = useContext(context)
  const {slug} = useParams()
  const projectsClean = projects.map((project:Project) => ({...project, name: project.name.replaceAll(' ','-').toLowerCase()}))
  console.log(projectsClean)
  const project = projectsClean.find((project:any)=> project.name == slug )
  console.log(project)
  return (
    <React.Fragment>
      <ProjectDetail {...project} />
    </React.Fragment>
  )
}
