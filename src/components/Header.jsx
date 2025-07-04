import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

  return (
    <div className=' sticky top-0 z-50 bg-[linear-gradient(90deg,_#0C0A25_0%,_#190B2F_50.48%,_#171E3D_100%)] h-[57px] md:h-[107px] flex px-[20px] md:px-[97px] justify-between'>
      <div className=' flex items-center justify-center'>
        <img src={logo} alt="Logo" className=' w-[59px] md:w-[164px]' />
      </div>
      <div className=' flex gap-[14px] md:gap-[27px] text-[8px] sm:text-[16px] font-[600] text-white items-center'>
        <a className=' hidden md:block' href='/'>HOME</a>
        <a href='/about'>ABOUT</a>
        <a href='/#services' >OUR SERVICES</a>
        <a href='/#products' >PRODUCTS</a>
        <a className=' hidden md:block' href='/#client' >OUR CLIENTS</a>
        <a href='/contact'>CONTACT US</a>
      </div>
    </div>
  )
}

export default Header
