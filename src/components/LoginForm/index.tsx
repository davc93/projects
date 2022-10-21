import React from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../firebase/auth';
import './style.css'
export const LoginForm = () => {

  const navigate = useNavigate()
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email,password)
      .then((response)=>{
        console.log("Autenticacion exitosa");
        event.target.reset();
        navigate('/profile')

      })
      .catch((error)=>{
        console.log('Problemas con tu autenticacion')
        console.log(error)
      })

  }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Email</label>
            <input type="text" name="email" placeholder='Email' />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder='Password' />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}
