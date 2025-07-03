import React from 'react'

import service from '../../../assets/aboutus/service.png'

const Component2 = () => {
  return (
    <div className=' text-white mt-[100px] flex justify-between gap-[10px] items-start'>
      <div className=' flex flex-col w-[60%]'>
        <div className=' font-[800] text-[32px] pb-[52px]'>Our Services</div>
        <div className=' pb-[50px]'>
          <ul className=' list-disc pl-5'>
            <li className=' text-[24px] font-[600]'>Corporate Uniforms & Workwear</li>
            <li className=' text-[24px] font-[600]'>Custom Clothing & Merchandise</li>
            <li className=' text-[24px] font-[600]'>Sustainable Apparel Solutions</li>
            <li className=' text-[24px] font-[600]'>Corporate Gifting & Merchandising</li>
          </ul>
        </div>
        <div className=' text-[24px] font-[600] pb-[60px]'>Printing & Finishing – Screen Printing, Sublimation, DTF, Embroidery, Laser Engraving, Cylindrical & UV Direct Printing</div>
        <div className=' text-[24px] font-[600]'>We work with a wide array of fabrics – from cotton to poly-cotton blends – and offer advanced finishes such as anti-stain, anti-odor, UV protection, moisture-wicking, organic, and eco-friendly treatments.</div>
      </div>
      <div className=' flex justify-center items-center'>
        <img className=' w-[475px]' src={service} about='service' />
      </div>
    </div>
  )
}

export default Component2
