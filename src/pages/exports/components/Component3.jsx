import React from 'react'

import export2 from '../../../assets/exports/export2.png'

const Component3 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
      <div className=' w-[40%] flex justify-start'>
        <img className=' w-[450px]' src={export2} alt='export1' />
      </div>
      <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Available Fabric Options:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Cotton –</span> Soft, breathable, and durable</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Poly Cotton –</span> Blend of strength and comfort</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Polyester –</span> Lightweight, wrinkle-resistant, fast-drying</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>And many more based on your need —</span> including blends, knits, and specialty weaves</li>
        </ul>
      </div>
    </div>
  )
}

export default Component3
