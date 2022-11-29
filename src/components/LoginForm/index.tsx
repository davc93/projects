import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../firebase/auth'
import './style.css'
export const LoginForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    login(email, password)
      .then((response) => {
        console.log('Autenticacion exitosa')
        event.target.reset()
        navigate('/profile')
      })
      .catch((error) => {
        console.log('Problemas con tu autenticacion')
        console.log(error)
      })
  }
  return (
    <form className='login-form shadow-lg rounded-xl flex flex-col gap-4 w-full lg:w-1/2  p-2 py-7 lg:px-16' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
            <label htmlFor="">Email</label>
            <input className='' type="text" name="email" placeholder='your email' />
        </div>
        <div className='flex flex-col gap-3'>
            <label htmlFor="">Password</label>
            <input className='' type="password" name="password" placeholder='your password' />
        </div>
        <button type="submit" className='btn btn--secondary'>Submit</button>
    </form>
  )
}
