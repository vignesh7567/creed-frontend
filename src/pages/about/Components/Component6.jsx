import React from 'react'

import economy from '../../../assets/aboutus/economy.png'

const Component6 = () => {
  return (
    <div className=' text-white mt-[160px] flex justify-between items-start gap-[20px] w-full'>
      <div>
        <div className=' text-[36px] font-[800] mb-[50px]'>Circular Economy Model</div>
        <div className=' text-[24px] font-[600] pb-[14px]'>We transform cutting waste into valuable new products:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[600]'>
          <li className=' pb-[14px]'>Insulation materials</li>
          <li className=' pb-[14px]'>Furniture and toy stuffing</li>
          <li className=' pb-[14px]'>Cleaning cloths</li>
          <li className=' pb-[14px]'>Recycled textiles for automotive, construction, and fashion industries</li>
          <li className=' pb-[14px]'>Eco-conscious everyday items</li>
        </ul>
      </div>
      <div>
        <img className=' w-[467px]' src={economy} alt='economy' />
      </div>
    </div>
  )
}

export default Component6
