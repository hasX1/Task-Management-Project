import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;
