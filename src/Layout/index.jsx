import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import HolderPromos from '../Components/Footer/HolderPromos'
import HolderExtra from '../Components/Footer/HolderExtra'
import Carousel from '../Components/Carousel/Carousel'
import HomeOffers from '../Components/Offers/HomeOffers'


export default function Layout() {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Carousel />
        <HomeOffers/>
        <Outlet />
        <HolderPromos />
        <HolderExtra />
      </div>
      <Footer />
    </Fragment>
  )
}