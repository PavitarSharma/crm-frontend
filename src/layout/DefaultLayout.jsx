import React from 'react'
import { Footer, Header } from '../components'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header mb-2'>
            <Header />
        </header>

        <main className='main'>{children}</main>

        <footer className='footer'>
            <Footer />
        </footer>
    </div>
  )
}

export default DefaultLayout