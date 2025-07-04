import React from 'react'

import service from '../../../assets/aboutus/service.png'

const Component2 = () => {
  return (
    <div className=' text-white mt-[20px] md:mt-[100px] flex flex-col md:flex-row justify-between gap-[30px] md:gap-[10px] items-center'>
      <div className=' flex flex-col md:w-[60%] text-center md:text-start'>
        <div className=' font-[800] text-[20px] md:text-[32px] pb-[20px] md:pb-[52px]'>Our Services</div>
        <div className=' pb-[20px] md:pb-[50px]'>
          <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600]'><span className=' pr-2'>•</span>Corporate Uniforms & Workwear</div>
          <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600]'><span className=' pr-2'>•</span>Custom Clothing & Merchandise</div>
          <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600]'><span className=' pr-2'>•</span>Sustainable Apparel Solutions</div>
          <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600]'><span className=' pr-2'>•</span>Corporate Gifting & Merchandising</div>
        </div>
        <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600] pb-[18px] md:pb-[60px]'><span className=' font-[600]'>Printing & Finishing –</span> Screen Printing, Sublimation, DTF, Embroidery, Laser Engraving, Cylindrical & UV Direct Printing</div>
        <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600]'><span className=' font-[600]'>We work with a wide array of fabrics –</span> from cotton to poly-cotton blends – and offer advanced finishes such as anti-stain, anti-odor, UV protection, moisture-wicking, organic, and eco-friendly treatments.</div>
      </div>
      <div className=' flex justify-center items-center'>
        <img className=' w-[359px] md:w-[475px]' src={service} about='service' />
      </div>
    </div>
  )
}

export default Component2
