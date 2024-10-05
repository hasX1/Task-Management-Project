import React from 'react'
import { Link } from 'react-router-dom'
import Task_Management from '../utils/Task_Management.png'
const Login = () => {
  return (
    <div className="flex flex-wrap h-screen">
   
      <div className="w-full md:w-1/2 bg-gray-200 flex justify-center items-center">
        <img 
          src={Task_Management} 
          alt="task management"
          className="w-3/4 h-auto object-cover"
        />
      </div>

    
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-8">Welcome Back!</h1>

        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="user-email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
            <input 
              type="email"
              id="user-email"
              placeholder="hello@reallygreatsite.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user-password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              id="user-password"
              placeholder="******"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-6 text-blue-700 hover:underline cursor-pointer">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
