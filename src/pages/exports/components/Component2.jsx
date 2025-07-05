import React from 'react'

import export1 from '../../../assets/exports/export1.png'

const Component2 = () => {
  return (
    <div className=' flex justify-between md:items-start mt-[40px] md:mt-[100px]'>
      <div className=' w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] mb-[10px] md:mb-[50px]'>What We Export:</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[2px] md:pb-[20px]'>Custom Corporate Wear (T-Shirts, Polos, Shirts, Hoodies, Uniforms, Jackets)</li>
          <li className=' pb-[2px] md:pb-[20px]'>Hospitality & Industrial Uniforms</li>
          <li className=' pb-[2px] md:pb-[20px]'>Promotional & Event Merchandise</li>
          <li className=' pb-[2px] md:pb-[20px]'>Retail-Ready Garments with Private Labeling</li>
        </ul>
      </div>
      <div className=' w-[40%] h-auto flex justify-center items-center'>
        <img className=' w-[145px] md:w-[450px]' src={export1} alt='export1' loading="lazy" />
      </div>
    </div>
  )
}

export default Component2
