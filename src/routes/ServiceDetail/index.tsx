import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../context'
import { Service } from '../../models'

export const ServiceDetail = () => {
  const handleClick = () => {
    window.location.href = 'mailto:davc93@gmail.com'
  }
  const { services }: any = useContext(context)
  const { slug } = useParams()
  const service: Service = services.find((service: Service) => service.name.replaceAll(' ', '-').toLowerCase() == slug)
  function createMarkup () {
    return { __html: service.description }
  }

  const priceFormated = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CLP'
  })
  if (service) {
    return (
      <header className='mx-6 md:mx-24 mt-8'>
        <article className='service-description'>
          <div dangerouslySetInnerHTML={createMarkup()}/>
          <span>{ priceFormated.format(service.price) } / Per section</span>
          {service.discount && (<span>{service.price * (1 - service.discount)}</span>)}
          <p>Each section has the size of the monitor display</p>
          <button onClick={handleClick} className='btn btn--primary'>Contactar</button>
        </article>
      </header>
    )
  } else {
    return (
      <div>Cargando...</div>
    )
  }
}
