import React from 'react'
import HomePage from './pages/HomePage.jsx'
import LoginForm from './components/LoginForm.jsx'
import AuthPage from './pages/AuthPage.jsx'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar.jsx'


const RootLayout = () => {
  return (
   <>
   <NavBar/>
   <Outlet />
   </>
  )
}

export default RootLayout
