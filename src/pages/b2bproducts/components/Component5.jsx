import React from 'react'

import b2b4 from '../../../assets/b2b/b2b4.png'

const Component5 = () => {
  return (
    <div className=' flex justify-between items-center md:items-start mt-[20px] md:mt-[100px] gap-2'>
        <div className=' w-[40%] flex justify-start'>
        <img className=' w-[450px]' src={b2b4} alt='export1' loading="lazy" />
        </div>
        <div className=' w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] md:mb-[50px]'>Fabric Options We Offer:</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[2px] md:pb-[20px]'>Cotton, Poly Cotton, Polyester, Blends, and more – all tested and certified for durability and comfort.</li>
            <li className=' pb-[2px] md:pb-[20px]'>What You Get:</li>
            <li className=' pb-[2px] md:pb-[20px]'>Sampling & prototyping</li>
            <li className=' pb-[2px] md:pb-[20px]'>Fabric and print sourcing</li>
            <li className=' pb-[2px] md:pb-[20px]'>Full customization and production</li>
            <li className=' pb-[2px] md:pb-[20px]'>Quality checks and packaging</li>
            <li className=' pb-[2px] md:pb-[20px]'>Global shipping support</li>
        </ul>
        </div>
    </div>
  )
}

export default Component5
