import React from 'react'
import { context } from '../context'

export const ProjectsPage = () => {
  
  const {auth}:any = React.useContext(context)
  return (
    <h1>Projects</h1>
  )
}
