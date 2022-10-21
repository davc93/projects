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
    return (
        <nav>
            <div className="nav-left"></div>
            <div className="nav-right">
                <ul>
                    {routes.map((route)=>{
                      if(route.onlyPublic && isAuth){
                        return null
                      }
                      if(route.private && !isAuth){
                        return null
                      }
                      return (
                        <li>
                          <NavLink style={({isActive})=> ({color: isActive ? 'blue' : 'black'  }) } to={route.path} end>{route.name}</NavLink>
                        </li>
                      )

                    })}
                    { isAuth &&
                    <button onClick={logout}>
                      Logout
                    </button>}

                </ul>
            </div>
        </nav>
    )
}
