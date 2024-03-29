import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
    
  const { loginUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const user = JSON.parse(localStorage.getItem('authTokens'))
  if (user) {
    return navigate('/account')
  }
  return (
    <div className="flex items-center h-screen w-full ">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Login
        </span>
        <form className="mb-4" onSubmit={loginUser}>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Username{' '}
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Username"
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
