import { useState } from 'react'
import './App.css'
import Login from './views/login'
import Dashboard from './views/dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
