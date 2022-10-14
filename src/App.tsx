import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error404 } from './routes/Error404'
import { LoginPage } from './routes/LoginPage'
import { ProfilePage } from './routes/ProfilePage'
import { ProjectsPage } from './routes/ProjectsPage'

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
