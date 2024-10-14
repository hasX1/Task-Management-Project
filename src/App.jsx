
import React from 'react';

import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import './App.css';

import { Provider } from "react-redux";
import store from './components/Redux/store';
import Tasks from './pages/Tasks';

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

      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="*" element={<PageNotFound />} />
            {/* User Profile */}
            <Route path="/dashboard/current-user" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Provider>
    </Router>

  );
}

export default App;