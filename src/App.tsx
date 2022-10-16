import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ContextProvider } from './context'
import { Error404 } from './routes/Error404'
import { LoginPage } from './routes/LoginPage'
import { ProfilePage } from './routes/ProfilePage'
import { ProjectPage } from './routes/ProjectPage'
import { ProjectsPage } from './routes/ProjectsPage'


function App() {
  const auth = false
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path='/project/:slug' element={<ProjectPage />} />
          <Route path="/login" element={(<LoginPage />)} />
          <Route path="/profile" element={(auth ? <ProfilePage /> : <Navigate to={'/'} />)} />
          <Route path="*" element={<Error404 />} />

        </Routes>
      </BrowserRouter>

    </ContextProvider>
  )
}

export default App
