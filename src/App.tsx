import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Error404 } from './routes/Error404'
import { LoginPage } from './routes/LoginPage'
import { ProfilePage } from './routes/ProfilePage'
import { ProjectPage } from './routes/ProjectPage'
import { ProjectsPage } from './routes/ProjectsPage'
import React from 'react'
import { context } from './context'
import { HomePage } from './routes/HomePage'
import { ContactPage } from './routes/ContactPage'
import ServicesPage from './routes/ServicesPage'
import ServiceDetail from './routes/ServiceDetail'

function App() {
  const {isAuth}:any = React.useContext(context)
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/project/:slug' element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/login" element={(<LoginPage />)} />
          <Route path="/profile" element={(isAuth ? <ProfilePage /> : <h1>No estas autorizado</h1>)} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path="*" element={<Error404 />} />

        </Routes>
      </BrowserRouter>

  )
}

export default App
