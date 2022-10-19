import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ContextProvider } from './context'
import { useAuth } from './hooks/useAuth'
import { Error404 } from './routes/Error404'
import { LoginPage } from './routes/LoginPage'
import { ProfilePage } from './routes/ProfilePage'
import { ProjectPage } from './routes/ProjectPage'
import { ProjectsPage } from './routes/ProjectsPage'


function App() {
  const {isAuth} = useAuth();
  console.log(isAuth)
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path='/project/:slug' element={<ProjectPage />} />
          <Route path="/login" element={(<LoginPage />)} />
          <Route path="/profile" element={(isAuth ? <ProfilePage /> : <h1>No estas autorizado</h1>)} />
          <Route path="*" element={<Error404 />} />

        </Routes>
      </BrowserRouter>

    </ContextProvider>
  )
}

export default App
