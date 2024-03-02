import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/layout/navbar/Navbar'
import './SASS/main.css'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/utils/ScrollToTop'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />

      <>
        <Navbar />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
      </>
    </>
  )
}

export default App
