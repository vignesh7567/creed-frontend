import React from 'react'

import vision from '../../../assets/aboutus/vision.png'

const Component3 = () => {
  return (
    <div className=' mt-[57px] md:mt-[150px] flex flex-col-reverse md:flex-row justify-between items-center text-white text-center md:text-start'>
      <div className=' md:w-[40%]'>
        <img className=' w-[497px]' src={vision} alt='vision' />
      </div>
      <div className=' md:w-[60%]'>
        <div className=' font-[800] text-[20px] md:text-[32px] pb-[20px] md:pb-[52px]'>Our Vision</div>
        <div className=' text-[13px] md:text-[24px] md:font-[600] pb-[40px] md:pb-0'>To become the most trusted B2B apparel and uniform partner in the Middle East by delivering value-driven clothing solutions that blend creativity, quality, and sustainability.</div>
      </div>
    </div>
  )
}

export default Component3
