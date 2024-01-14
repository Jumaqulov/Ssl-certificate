import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'


export default function Layout() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header/>
        <Navbar />
        <Outlet />
      </div>
    </Fragment>
  )
}