import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {

  return (
    <div className=' sticky top-0 z-50 bg-[linear-gradient(90deg,_#0C0A25_0%,_#190B2F_50.48%,_#171E3D_100%)] h-[107px] flex px-[97px] justify-between'>
      <div className=' flex items-center justify-center'>
        <img src={logo} alt="Logo" width={164} height={66} />
      </div>
      <div className=' flex gap-[27px] text-[16px] font-[600] text-white items-center'>
        <a href='/'>HOME</a>
        <a href='/about'>ABOUT</a>
        <a href='' >OUR SERVICES</a>
        <a href='' >PRODUCTS</a>
        <a href='' >OUR CLIENTS</a>
        <a href='/contact'>CONTACT US</a>
      </div>
    </div>
  )
}

export default Header
