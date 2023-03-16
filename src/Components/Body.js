import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Body = () => {
  return (
    <>
    <NavBar/>
    <div className="flex">
        <SideBar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Body