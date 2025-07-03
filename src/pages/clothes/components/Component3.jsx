import React from 'react'

import clothes2 from '../../../assets/clothes/clothes2.png'

const Component3 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[40%] flex justify-start'>
        <img className=' w-[450px]' src={clothes2} alt='export1' />
        </div>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>We Offer All Types of Printing Techniques:</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Screen Printing –</span> deal for large quantity, bold designs</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>DTG (Direct to Garment) –</span> High-detail prints for complex designs</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Embroidery –</span> For a premium and durable finish</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Puff Print / 3D Print —</span> For raised, textured design appeal</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Heat Transfer / Vinyl —</span> Great for names, numbers, and logos</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>Sublimation —</span> For all-over vibrant prints (especially for jerseys or activewear)</li>
          <li className=' pb-[20px]'><span className=' font-[600] text-black'>With The Creed, you're not just getting clothes —</span> you're getting clothing that tells your brand story.</li>
        </ul>
        </div>
    </div>
  )
}

export default Component3
