import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layouts() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layouts