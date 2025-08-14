import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ContextUser } from './Context/ContextUser'
import NotesPage from './pages/NotesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextUser>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/notes' element={<NotesPage />} />
        </Routes>
      </ContextUser>
    </>
  )
}

export default App
