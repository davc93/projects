import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error404 } from './Routes/Error404'
import { LoginPage } from './Routes/LoginPage'
import { ProfilePage } from './Routes/ProfilePage'
import { ProjectsPage } from './Routes/ProjectsPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="*" element={<Error404/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
