import React from 'react'

import brand2 from '../../../assets/brand/brand2.png'

const Component3 = () => {
  return (
    <div className=' flex justify-between items-center md:items-start mt-[20px] md:mt-[100px] gap-2'>
      <div className=' w-[40%] flex justify-start'>
        <img className=' w-[450px]' src={brand2} alt='export1' />
      </div>
      <div className=' w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] md:mb-[50px]'>Why Choose The Creed as Your Brand Execution Partner?</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[2px] md:pb-[20px]'>Expert creative direction with in-house designers</li>
          <li className=' pb-[2px] md:pb-[20px]'>Full customization freedom</li>
          <li className=' pb-[2px] md:pb-[20px]'>High-quality manufacturing with scalable production</li>
          <li className=' pb-[2px] md:pb-[20px]'>Centralized logistics from Dubai to support local and international launches</li>
          <li className=' pb-[2px] md:pb-[20px]'>You own the brand — we power the backend</li>
        </ul>
      </div>
    </div>
  )
}

export default Component3
