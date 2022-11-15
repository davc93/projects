import './styles.css'
import React from 'react'
import { Project } from '../../models'

export const ProjectDetail = ({ name, description, featureImage, envLink, repoLink, techs }: Project) => {

  
  return (
    <article className='flex flex-col gap-8 items-center md:text-start text-center md:flex-row-reverse shadow-xl p-2 md:p-8'>
      <img className="lg:w-96 lg:object-cover max-h-screen" src={featureImage} alt={name} />
      <div className='lg:mb-24'>
        <h1 className='mb-4'>{name}</h1>
        <p className='dark:text-white' >{description}</p>
        
        {techs ? (<div className="techs">
          {techs.map((tech)=> (
            <div key={tech.name} className='card--tech-project-detail'>
              <img className='w-14 h-14' src={`/${tech.name}.svg`} alt={tech.name} />
              <span className='capitalize'>{tech.name}</span>
            </div>

          ))}
        </div>) : ''}
        <div className="project-detail__buttons flex flex-col items-center mt-8 gap-3 md:flex-row">
          <a className='btn btn--primary' href={envLink}>Go to App</a>
          <a className='btn btn--secondary' href={repoLink}>Go to Repo</a>
        </div>
      </div>
    </article>
  )
}
