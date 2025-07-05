import React from 'react'

import economy from '../../../assets/aboutus/economy.png'

const Component6 = () => {
  return (
    <div className=' text-white mt-[40px] md:mt-[160px] flex flex-col md:flex-row justify-between items-start gap-[20px] w-full text-center md:text-start'>
      <div>
        <div className=' text-[20px] md:text-[36px] font-[800] mb-[10px] md:mb-[50px]'>Circular Economy Model</div>
        <div className=' text-[13px] md:text-[24px] font-[600] pb-[4px] md:pb-[14px]'>We transform cutting waste into valuable new products:</div>
        <ul className=' md:list-disc md:pl-5 text-[13px] md:text-[24px] font-[600] mb-[20px] md:mb-0'>
          <li className=' pb-[2px] md:pb-[14px]'><span className=' pr-[10px] md:hidden'>•</span>Insulation materials</li>
          <li className=' pb-[2px] md:pb-[14px]'><span className=' pr-[10px] md:hidden'>•</span>Furniture and toy stuffing</li>
          <li className=' pb-[2px] md:pb-[14px]'><span className=' pr-[10px] md:hidden'>•</span>Cleaning cloths</li>
          <li className=' pb-[2px] md:pb-[14px]'><span className=' pr-[10px] md:hidden'>•</span>Recycled textiles for automotive, construction, and fashion industries</li>
          <li className=' pb-[2px] md:pb-[14px]'><span className=' pr-[10px] md:hidden'>•</span>Eco-conscious everyday items</li>
        </ul>
      </div>
      <div>
        <img className=' w-[467px]' src={economy} alt='economy' loading="lazy" />
      </div>
    </div>
  )
}

export default Component6
