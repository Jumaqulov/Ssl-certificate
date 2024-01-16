import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import HolderPromos from '../Components/Footer/HolderPromos'


export default function Layout() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Outlet />
        <HolderPromos />
      </div>
      <Footer />
    </Fragment>
  )
}