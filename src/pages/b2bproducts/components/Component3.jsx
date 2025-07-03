import React from 'react'

import b2b2 from '../../../assets/b2b/b2b2.png'

const Component3 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[40%] flex justify-start'>
        <img className=' w-full' src={b2b2} alt='export1' />
        </div>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Why Choose The Creed as Your Supply Partner?</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[20px]'>Bulk capacity with consistent quality</li>
            <li className=' pb-[20px]'>Complete white-label support – including custom labels, tags & packaging</li>
            <li className=' pb-[20px]'>Ability to handle multiple SKUs, styles, and collections</li>
            <li className=' pb-[20px]'>On-time delivery backed by Dubai's global logistics hub</li>
            <li className=' pb-[20px]'>Low MOQs for pilots + high-volume readiness for scaling</li>
        </ul>
        </div>
    </div>
  )
}

export default Component3
