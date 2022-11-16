import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../context'
import { Service } from '../../models'

export const ServiceDetail = () => {
  const { services }:any = useContext(context)
  const { slug } = useParams()
  const service: Service = services.find((service: Service) => service.name.replaceAll(' ', '-').toLowerCase() == slug)
  if (service) {

    return (
      <header>
        <article>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <span>{service.price}</span>
          {service.discount && (<span>{service.price * (1 - service.discount)}</span>)}
        </article>
      </header>
    )
  } else {
    return (
      <></>
    )
  }
}
