import React from 'react'
import { Project } from '../../models'
import './styles.css'
import { Link } from 'react-router-dom'

export const ProjectCard = ({ name, featureImage, description }: Project) => {
  const slug = name.replaceAll(' ', '-').toLowerCase()
  return (
    <div className='project-card'>
      <img src={featureImage || ''} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link className='btn btn--primary' to={`/project/${slug}`}>More details</Link>
    </div>
  )
}
