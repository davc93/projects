import React from 'react'
import { Project } from '../../models'
import './styles.css'
import { Link } from 'react-router-dom'

export const ProjectCard = ({name,featureImage,description}:Project) => {
  return (
    <div className='project-card'>
      <img src={featureImage || ''} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/project/${name}`}>More details</Link>
    </div>
  )
}
