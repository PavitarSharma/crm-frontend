import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Header } from './components'
import { AddTicket, DashBoard, Login, Register, ResetPassword, TicketList } from './pages'
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
          <Route  path="/add-ticket" element={ <AddTicket /> } />
          <Route  path="/ticket-list" element={ <TicketList /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
