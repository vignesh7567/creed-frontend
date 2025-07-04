import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

  return (
    <div className=' sticky top-0 z-50 bg-[linear-gradient(90deg,_#0C0A25_0%,_#190B2F_50.48%,_#171E3D_100%)] h-[57px] md:h-[107px] flex px-[20px] md:px-[97px] justify-between'>
      <div className=' flex items-center justify-center'>
        <img src={logo} alt="Logo" className=' w-[59px] md:w-[164px]' />
      </div>
      <div className=' flex gap-[14px] md:gap-[27px] text-[8px] sm:text-[16px] font-[600] text-white items-center'>
        <a className=' hidden md:block hover:text-red-400 transition-transform duration-200 hover:scale-105' href='/'>HOME</a>
        <a href='/about' className=' hover:text-red-400 transition-transform duration-200 hover:scale-105'>ABOUT</a>
        <a href='/#services' className=' hover:text-red-400 transition-transform duration-200 hover:scale-105' >OUR SERVICES</a>
        <a href='/#products' className=' hover:text-red-400 transition-transform duration-200 hover:scale-105' >PRODUCTS</a>
        <a className=' hidden md:block hover:text-red-400 transition-transform duration-200 hover:scale-105' href='/#client' >OUR CLIENTS</a>
        <a href='/contact' className=' hover:text-red-400 transition-transform duration-200 hover:scale-105'>CONTACT US</a>
      </div>
    </div>
  )
}

export default Header
