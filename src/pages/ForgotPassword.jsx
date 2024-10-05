import React from 'react'
import { Link } from 'react-router-dom'
import Task_Management from '../utils/Task_Management.png'
const ForgotPassword = () => {
  return (
    <div className="flex flex-wrap h-screen">
 
      <div className="w-full md:w-1/2 bg-blue-100 flex justify-center items-center">
        <img 
          src= {Task_Management}
          alt="task management"
          className="w-3/4 h-auto object-cover"
        />
      </div>

   
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-4xl font-bold mb-8 noto-serif-oriya">Forgot Password!</h1>

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

          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            SEND REQUEST <span className="ml-2">→</span>
          </button>
        </form>

        <p className="mt-6 text-gray-600">
          Already Registered?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword;
