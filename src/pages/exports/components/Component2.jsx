import React from 'react'

import export1 from '../../../assets/exports/export1.png'

const Component2 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
      <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>What We Export:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[20px]'>Custom Corporate Wear (T-Shirts, Polos, Shirts, Hoodies, Uniforms, Jackets)</li>
          <li className=' pb-[20px]'>Hospitality & Industrial Uniforms</li>
          <li className=' pb-[20px]'>Promotional & Event Merchandise</li>
          <li className=' pb-[20px]'>Retail-Ready Garments with Private Labeling</li>
        </ul>
      </div>
      <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={export1} alt='export1' />
      </div>
    </div>
  )
}

export default Component2
