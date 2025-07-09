// // @ts-nocheck
// import { useState } from 'react'
// import './App.css'
// import AboutPage from './component/AboutPage'
// import LandingPage from './component/LandingPage'
// import NavBar from './component/NavBar'
// import Footer from './component/Footer'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RegisterPage from './component/RegisterPage'
// import LoginPage from './component/LoginPage'
// import { Toaster } from 'react-hot-toast'
// import DashboardLayout from './dashboard/DashboardLayout'
// function App() {

//   return (
//     <>
//      <BrowserRouter>
//      <NavBar/>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path='/register' element={<RegisterPage/>} />
//         <Route path='/login' element={<LoginPage/>} />
//         <Route path='/dashboard' element={<DashboardLayout/>} />
//       </Routes>

//       <Footer/>
//      </BrowserRouter>
//     </>
//   )
// }

// export default App


import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { getApps } from './utils/helper'

function App() {

  const CurrentApp = getApps();

  return (
    <Router>
      <CurrentApp />
    </Router>
  )
}

export default App
