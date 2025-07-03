import React from 'react'

import uniform1 from '../../../assets/uniform/uniform1.png'

const Component1 = () => {
  return (
    <div className=' flex justify-between items-start mt-[100px]'>
        <div className=' w-[60%]'>
        <div className='text-[40px] font-[800] mb-[50px]'>Corporate Uniforms</div>
        <ul className=' list-disc pl-5 text-[24px] font-[500] text-[rgba(0,0,0,0.7)]'>
            <li className=' pb-[20px]'>Uniform manufacturing involves the production of clothing items that adhere to specific standards and designs for various industries, organizations, or institutions. This process typically begins with the selection of appropriate fabrics, colors, and designs according to the client’s requirements.</li>
            <li className=' pb-[20px]'>The manufacturing process includes cutting, sewing, and finishing the garments to ensure they meet quality standards and are durable for regular use.</li>
            <li className=' pb-[20px]'>Uniform manufacturers often work closely with clients to create custom designs that reflect the organization’s brand identity and meet thefunctional needs of the wearers.</li>
        </ul>
        </div>
        <div className=' w-[40%] flex justify-end'>
        <img className=' w-[450px]' src={uniform1} alt='export1' />
        </div>
    </div>
  )
}

export default Component1
