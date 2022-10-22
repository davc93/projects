import './styles.css'
import React from 'react'
import { Project } from '../../models'

export const ProjectDetail = ({ name, description, featureImage, envLink, repoLink }: Project) => {
  return (
    <article className='flex flex-col gap-8 items-center md:text-start text-center md:flex-row-reverse'>
      <img className='h-96 lg:w-1/2 lg:h-screen object-fit ' src={featureImage} alt={name} />
      <div className='lg:mb-24'>
        <h1>{name}</h1>
        <p >{description}</p>
        <div className="project-detail__buttons flex flex-col items-center mt-8 gap-3 md:flex-row">
          <a className='btn--primary' href={envLink}>Go to App</a>
          <a className='btn--secondary' href={repoLink}>Go to Repo</a>
        </div>
      </div>
    </article>
  )
}
