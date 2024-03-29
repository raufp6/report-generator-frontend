import { useState } from 'react'
import './App.css'
import Login from './views/login'
import Dashboard from './views/dashboard'
import { Routes, Route } from 'react-router-dom'
import AuthProtected from './utils/ProtectedRoute'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="account/*"
          element={<AuthProtected element={<Dashboard />} />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
