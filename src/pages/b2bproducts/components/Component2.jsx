import React from 'react'

import b2b1 from '../../../assets/b2b/b2b1.png'

const Component2 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Who We Work With:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[20px]'>Clothing brands looking for premium manufacturing partners</li>
            <li className=' pb-[20px]'>Custom uniform agencies and B2B merch providers</li>
            <li className=' pb-[20px]'>E-commerce stores and D2C fashion brands</li>
            <li className=' pb-[20px]'>Promotional & gifting companies</li>
            <li className=' pb-[20px]'>International distributors seeking reliable export partners</li>
        </ul>
        </div>
        <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={b2b1} alt='export1' />
        </div>
    </div>
  )
}

export default Component2
