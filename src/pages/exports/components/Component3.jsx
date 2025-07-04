import React from 'react'

import export2 from '../../../assets/exports/export2.png'

const Component3 = () => {
  return (
    <div className=' flex h-[100%] bg-blue-600 justify-between items-start mt-[20px] md:mt-[100px]'>
      <div className=' w-[40%] bg-green-400 h-full flex justify-start items-center'>
        <img className=' w-[450px]' src={export2} alt='export1' />
      </div>
      <div className=' w-[60%] bg-red-500'>
        <div className='text-[20px] md:text-[40px] font-[800] mb-[10px] md:mb-[50px]'>Available Fabric Options:</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Cotton –</span> Soft, breathable, and durable</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Poly Cotton –</span> Blend of strength and comfort</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>Polyester –</span> Lightweight, wrinkle-resistant, fast-drying</li>
          <li className=' pb-[2px] md:pb-[20px]'><span className=' font-[600] text-gray-800'>And many more based on your need —</span> including blends, knits, and specialty weaves</li>
        </ul>
      </div>
    </div>
  )
}

export default Component3
