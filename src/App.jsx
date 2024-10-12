// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import SignUp from './pages/SignUp'
// import Login from './pages/Login'
// import ForgotPassword from './pages/ForgotPassword'
// import './App.css';
// import Dashboard from './pages/Dashboard'
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="*" element={<SignUp />} />
//       </Routes>
//     </Router>
//     <Dashboard/> 
//   )
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
