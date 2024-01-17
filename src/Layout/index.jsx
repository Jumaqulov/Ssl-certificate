import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import HolderPromos from '../Components/Footer/HolderPromos'
import HolderExtra from '../Components/Footer/HolderExtra'


export default function Layout() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Outlet />
        <HolderPromos />
        <HolderExtra />
      </div>
      <Footer />
    </Fragment>
  )
}