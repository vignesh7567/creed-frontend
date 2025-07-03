import React from 'react'

import b2b3 from '../../../assets/b2b/b2b3.png'

const Compoent4 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Advanced Finishing Capabilities:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[20px]'>Add more value to your brand offerings with:</li>
            <li className=' pb-[20px]'>Anti-Stain, Anti-Odor, UV Protection</li>
            <li className=' pb-[20px]'>Super Wicking, Organic Processing, Eco-Friendly Finishing</li>
        </ul>
        </div>
        <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={b2b3} alt='export1' />
        </div>
    </div>
  )
}

export default Compoent4
