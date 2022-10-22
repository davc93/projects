import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { context } from '../../context'
import { logout } from '../../firebase/auth'
import { Route } from '../../models'

const routes: Route[] = [
    {
      name: 'Projects',
      path: '/',
      private: false,
      onlyPublic: false
    },
    {
      name: 'Profile',
      path: '/profile',
      private: true,
      onlyPublic: false
    },
    {
      name: 'Login',
      path: '/login',
      private: false,
      onlyPublic: true
    }
  ]
export const Navbar = () => {
    
    const {isAuth }: any = useContext(context)
    const [isActive, setIsActive] = React.useState(false)

    const handleLogout =() => {
      logout()
      setIsActive(!isActive)
    }
    return (
        <nav className='lg:flex w-full h-16 items-center justify-end px-8 fixed bg-gray-100'>
            
            <div className=" menu-desktop">
                <ul className='hidden lg:flex gap-2'>
                    {routes.map((route)=>{
                      if(route.onlyPublic && isAuth){
                        return null
                      }
                      if(route.private && !isAuth){
                        return null
                      }
                      return (
                        <li key={route.path}>
                          <NavLink onClick={()=>{setIsActive(!isActive)}} className='link' to={route.path} end>{route.name}</NavLink>
                        </li>
                      )

                    })}
                    { isAuth &&
                    <button onClick={handleLogout} className='link'>
                      Logout
                    </button>}

                </ul>
            </div>
            <div className='menu-icon lg:hidden '>
              <button onClick={()=>{setIsActive(!isActive)}}>
                <svg className="w-12 h-12 absolute right-0 top-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </button>
            </div>
            { isActive && <div className="menu-mobile">
                <ul className='lg:hidden  flex flex-col fixed pt-20 border-2 border-r-indigo-800 items-center gap-2 top-0 left-0 bg-gray-200 h-screen w-1/2'>
                    {routes.map((route)=>{
                      if(route.onlyPublic && isAuth){
                        return null
                      }
                      if(route.private && !isAuth){
                        return null
                      }
                      return (
                        <li key={route.path}>
                          <NavLink onClick={()=>{setIsActive(!isActive)}} className='link' to={route.path} end>{route.name}</NavLink>
                        </li>
                      )

                    })}
                    { isAuth &&
                    <button onClick={handleLogout} className='link'>
                      Logout
                    </button>}

                </ul>
            </div> }
        </nav>
    )
}
