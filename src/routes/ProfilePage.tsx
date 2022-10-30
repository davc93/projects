import React from 'react'
import { CategoryForm } from '../components/CategoryForm'
import { ProjectForm } from '../components/ProjectForm'
import { TechForm } from '../components/TechForm'
export const ProfilePage = () => {
  return (
    <>
    <h1>ProfilePage</h1>
    <ProjectForm/>
    <CategoryForm/>
    <TechForm/>
    </>
  )
}
