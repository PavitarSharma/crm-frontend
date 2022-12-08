import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Header } from './components'
import { DashBoard, Login, Register, ResetPassword } from './pages'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route  path="/registration" element={ <Register /> } />
          <Route  path="/password-reset" element={ <ResetPassword /> } />
          <Route  path="/dashboard" element={ <DashBoard /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App