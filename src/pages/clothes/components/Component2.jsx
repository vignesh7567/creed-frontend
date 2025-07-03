import React from 'react'

import clothes1 from '../../../assets/clothes/clothes1.png'

const Component2 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Our Capabilities Include:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[20px]'>100% customization from fabric to fit</li>
            <li className=' pb-[20px]'>Wide range of garments: Polos, Shirts, Hoodies, Jackets, Workwear, Uniforms & more</li>
            <li className=' pb-[20px]'>Custom label and packaging options</li>
            <li className=' pb-[20px]'>Support for small MOQs to bulk corporate orders</li>
            <li className=' pb-[20px]'>Expert guidance from concept to delivery</li>
        </ul>
        </div>
        <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={clothes1} alt='export1' />
        </div>
    </div>
  )
}

export default Component2
