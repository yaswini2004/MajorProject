import React from 'react'
import LoginPage from './Components/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<h1>SignUp</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App