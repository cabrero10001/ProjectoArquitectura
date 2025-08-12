import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ContextUser } from './Context/ContextUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextUser>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </ContextUser>
    </>
  )
}

export default App
