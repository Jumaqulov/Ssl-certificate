import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import HolderPromos from '../Components/Footer/HolderPromos'
import HolderExtra from '../Components/Footer/HolderExtra'
import Carousel from '../Components/Carousel/Carousel'
import HomeOffers from '../Components/Offers/HomeOffers'
import Sidebar from '../Components/Sidebar/Sidebar'


function LayoutHome() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Carousel />
        <HomeOffers />
        <HolderPromos />
        <HolderExtra />
      </div>
      <Footer />
    </Fragment>
  )
}


function LayoutOther() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Carousel />
        <div className='exchange-center'>
          <div className='side-bar'>
            <Sidebar/>
          </div>
          <div className='outlet'>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export { LayoutHome, LayoutOther }