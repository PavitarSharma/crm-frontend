import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, Register, ResetPassword } from './pages'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route  path="/registration" element={ <Register /> } />
          <Route  path="/password-reset" element={ <ResetPassword /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App