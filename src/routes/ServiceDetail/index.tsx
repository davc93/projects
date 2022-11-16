import React from 'react'
import { useParams } from 'react-router-dom'

export const ServiceDetail = () => {
  const {slug} = useParams()
  return (
    <div>{slug}</div>
  )
}
