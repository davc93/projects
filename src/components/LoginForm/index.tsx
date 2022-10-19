import React from 'react'
import { login } from '../../hooks/login';
import './style.css'
export const LoginForm = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
    login(email,password)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
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
