import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <Fragment>
      <div className="wrapper">
        <Navbar />
        <Outlet />
      </div>
    </Fragment>
  )
}