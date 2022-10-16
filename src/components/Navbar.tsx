import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from '../models'

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
    return (
        <nav>
            <div className="nav-left"></div>
            <div className="nav-right">
                <ul>
                    {routes.map((route)=>(
                        <li>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    )
}
