import React from 'react'
import { LoginForm } from '../components/LoginForm'
export const LoginPage = () => {
  return (
    <section className='pt-24 mx-4 lg:mx-16 lg:flex lg:flex-col lg:items-center'>
    <h1 className='mb-8'>LoginPage</h1>
    <LoginForm/>
    </section>
  )
}
