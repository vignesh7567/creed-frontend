import React from 'react'
import ImageContainer from './components/ImageContainer'
import OurServices from './components/OurServices'
import OurProducts from './components/OurProducts'
import ContactUs from './components/ContactUs'
import Client from './components/Client'

const IndexPage = () => {
  return (
    <div className='bg-[linear-gradient(90deg,_#0C0A25_0%,_#190B2F_50.48%,_#171E3D_100%)] flex flex-col justify-center items-center'>
      <ImageContainer />
      <OurServices />
      <OurProducts />
      <Client />
      <ContactUs />
    </div>
  )
}

export default IndexPage
