import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index.jsx'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header.jsx'
import Footer from '../Components/Footer'
import HolderPromos from '../Components/Footer/HolderPromos.jsx'
import HolderExtra from '../Components/Footer/HolderExtra.jsx'
import Carousel from '../Components/Carousel/Carousel.jsx'
import HomeOffers from '../Components/Offers/HomeOffers.jsx'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'


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
        <HolderPromos />
        <HolderExtra />
      </div>
      <Footer />
    </Fragment>
  )
}

export { LayoutHome, LayoutOther }