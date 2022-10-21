import './styles.css'
import React from 'react'
import { Project } from '../../models'

export const ProjectDetail = ({name,description,featureImage,envLink,repoLink}:Project) => {
  return (
    <article>
        <img src={featureImage} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="project-detail__buttons">
            <a href={envLink}>Go to App</a>
            <a href={repoLink}>Go to Repo</a>
        </div>
    </article>
  )
}
