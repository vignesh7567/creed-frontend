import React from 'react'

import product1 from '../../../assets/product1.png'
import product2 from '../../../assets/product2.png'
import product3 from '../../../assets/product3.png'
import product4 from '../../../assets/product4.png'

const OurProducts = () => {
  return (
    <div id='products' className=' flex flex-col justify-center items-center pt-[109px] w-[80%]'>
      <div className=' text-[20px] md:text-[40px] font-[800] text-white mb-[26px] md:mb-[16px] tracking-widest text-center'>OUR PRODUCTS</div>
      <div className=' text-[12px] md:text-[20px] text-[rgba(255,255,255,0.7)] tracking-widest text-center'>Transforming your brand’s identity through meticulously designed custom uniforms. From professional chic to team spirit, we design the perfect attire for every setting.</div>
      <div className=' flex flex-wrap justify-center gap-[20px] mt-[52px] md:mt-[72px]' >
        <img className=' w-[295px]' src={product1} alt='procduct' />
        <img className=' w-[295px]' src={product2} alt='procduct' />
        <img className=' w-[295px]' src={product3} alt='procduct' />
        <img className=' w-[295px]' src={product4} alt='procduct' />
      </div>
    </div>
  )
}

export default OurProducts
