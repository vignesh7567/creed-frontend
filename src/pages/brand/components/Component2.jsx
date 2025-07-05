import React from 'react'

import brand1 from '../../../assets/brand/brand1.png'

const Component2 = () => {
  return (
    <div className=' flex justify-between items-center md:items-start mt-[20px] md:mt-[100px]'>
        <div className=' w-[60%]'>
        <div className='text-[20px] md:text-[40px] font-[800] md:mb-[50px]'>What We Offer:</div>
        <ul className=' list-disc pl-1 md:pl-5 text-[12px] md:text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[2px] md:pb-[20px]'>Brand Ideation & Concept Creation</li>
            <li className=' pb-[2px] md:pb-[20px]'>Logo & Identity Design</li>
            <li className=' pb-[2px] md:pb-[20px]'>Style Guide Development</li>
            <li className=' pb-[2px] md:pb-[20px]'>Custom Garment Design (T-shirts, polos, uniforms, hoodies, etc.)</li>
            <li className=' pb-[2px] md:pb-[20px]'>Printing & Embellishment Planning (DTG, Screen, Puff, Embroidery, etc.)</li>
            <li className=' pb-[2px] md:pb-[20px]'>Labeling, Tag Design & Custom Packaging Web-Ready Product Shoots</li>
            <li className=' pb-[2px] md:pb-[20px]'>We Don’t Do Marketing – We Build the Product.</li>
            <li className=' pb-[2px] md:pb-[20px]'>From the look, feel, and finish to the final delivery — everything is tailored for your brand, ready to be promoted on your own platforms or by your own marketing teams.</li>
        </ul>
        </div>
        <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={brand1} alt='export1' loading="lazy" />
        </div>
    </div>
  )
}

export default Component2
