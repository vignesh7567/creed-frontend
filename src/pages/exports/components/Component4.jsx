import React from 'react'

import export3 from '../../../assets/exports/export3.png'

const Component4 = () => {
  return (
    <div className=' flex justify-between items-center md:items-start mt-[50px] md:mt-[100px] md:mb-[200px]'>
      <div className=' w-[60%] md:w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] md:mb-[50px]'>Why Choose The Creed for Exports?</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className='pb-[2px] md:pb-[20px]'>Central export hub in Dubai with access to global shipping</li>
          <li className='pb-[2px] md:pb-[20px]'>Premium finish, scalable quantities, and quick turnarounds</li>
          <li className='pb-[2px] md:pb-[20px]'>Fully customizable — fabric, fit, print, branding, and packaging</li>
          <li className='pb-[2px] md:pb-[20px]'>End-to-end logistics support from documentation to dispatch</li>
        </ul>
      </div>
      <div className=' w-[40%] md;w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={export3} alt='export1' loading="lazy" />
      </div>
    </div>
  )
}

export default Component4
