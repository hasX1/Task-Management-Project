import React from 'react'
import { Link } from 'react-router-dom' 
import Task_Management from '../utils/Task_Management.png'
import '../app.css';
const SignUp = () => {
  return (
    <div className="flex flex-wrap h-screen">

      <div className="w-full md:w-1/2  bg-blue-200 flex justify-center items-center">
        <img 
          src={Task_Management}
          alt="task management"
          className="w-3/4 h-auto object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-3xl font-bold mb-8">Create New Account</h1>

        <form className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input 
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user-email" className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email"
              id="user-email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="user-password" className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              id="user-password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role-select" className="block text-gray-700 mb-2">Select your Role</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="role-select"
            >
              <option value="" disabled  >Select</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

     
        <p className="mt-6 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">Log in here</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;
