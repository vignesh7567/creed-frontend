import React from 'react'

import vision from '../../../assets/aboutus/vision.png'

const Component3 = () => {
  return (
    <div className=' mt-[150px] flex justify-between items-start text-white'>
      <div className=' w-[40%]'>
        <img className=' w-[497px]' src={vision} alt='vision' />
      </div>
      <div className=' w-[60%]'>
        <div className=' font-[800] text-[32px] pb-[52px]'>Our Vision</div>
        <div className=' text-[24px] font-[600]'>To become the most trusted B2B apparel and uniform partner in the Middle East by delivering value-driven clothing solutions that blend creativity, quality, and sustainability.</div>
      </div>
    </div>
  )
}

export default Component3
