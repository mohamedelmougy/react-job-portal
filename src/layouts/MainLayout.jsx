import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
    
  return (
    <>
    <NavBar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLayout