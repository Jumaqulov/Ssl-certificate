import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

export default function Footer() {
  return (
    <div className='footer'>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom/>
    </div>
  )
}