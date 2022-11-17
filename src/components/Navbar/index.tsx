import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../context";
import { logout } from "../../firebase/auth";
import { Route } from "../../models";
import './style.scss'
const routes: Route[] = [
  {
    name: "About me",
    path: "/",
    private: false,
    onlyPublic: false,
  },
  {
    name: "Services",
    path: "/services",
    private: false,
    onlyPublic: false,
  },
  {
    name: "Projects",
    path: "/projects",
    private: false,
    onlyPublic: false,
  },
  {
    name: "Profile",
    path: "/profile",
    private: true,
    onlyPublic: false,
  },
  {
    name: "Login",
    path: "/login",
    private: false,
    onlyPublic: true,
  },
  {
    name: "Contact",
    path: "/contact",
    private: false,
    onlyPublic: false,
  }
];
export const Navbar = () => {
  const { isAuth, toggleDark }: any = useContext(context);
  const [checkHamburger, setCheckHamburger] = React.useState(false)
  const handleMobileDarkMode = () =>{
    toggleDark()

  }
  const toggleMobileMenu = () => {

    setCheckHamburger(!checkHamburger)
  }

  const handleLogout = () => {
    
    logout();
    toggleMobileMenu()
  };
  return (

    <nav className="z-10">
      <div className="menu--desktop primary-navigation">
        <div className="desktop-logo--container">
        </div>
        <ul className="hidden lg:flex gap-2">
          {routes.map((route) => {
            if (route.onlyPublic && isAuth) {
              return null;
            }
            if (route.private && !isAuth) {
              return null;
            }
            return (
              <li key={route.path}>
                <NavLink
                  
                  
                  className={({isActive})=>(isActive ? 'link-active' : 'link')}
                  to={route.path}
                  end
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
          {isAuth && (
            <li>
              <button onClick={handleLogout} className="link">
                Logout
              </button>
            </li>
          )}
          <li>
            <button onClick={toggleDark}><svg className="w-6 h-6 fill-white bg-black dark:fill-black dark:bg-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg></button>
          </li>
        </ul>
      </div>
      <div className="menu--mobile">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" checked={checkHamburger} onChange={toggleMobileMenu}  />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <div className="logo">
            <img src='' alt='' />
          </div>
          <div className="menu-items">
            {routes.map((route) => {
              if (route.onlyPublic && isAuth) {
                return null;
              }
              if (route.private && !isAuth) {
                return null;
              }
              return (
                <li key={route.path}>
                  <NavLink
                    onClick={toggleMobileMenu}
                    className={({isActive})=>(isActive ? 'link-active' : 'link')}
                    to={route.path}
                    end
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
            {isAuth && (
              <li>
                <button onClick={handleLogout} className="link">
                  Logout
                </button>
              </li>
            )}
            <li>
              <button onClick={handleMobileDarkMode}><svg className="w-6 h-6 fill-white bg-black dark:fill-black dark:bg-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg></button>
            </li>
          </div>
        </div>
      </div>
    </nav>

  );
};
