import React from 'react'

import product1 from '../../../assets/product1.png'
import product2 from '../../../assets/product2.png'
import product3 from '../../../assets/product3.png'
import product4 from '../../../assets/product4.png'

const products = [
  { img: product1, text: "CORPORATE UNIFORMS" },
  { img: product2, text: "SUSTAINABLE CLOTHING" },
  { img: product3, text: "CUSTOM CLOTHING" },
  { img: product4, text: "CORPORATE GIFTS" },
];

const OurProducts = () => {
  return (
    <div id='products' className=' flex flex-col justify-center items-center pt-[109px] w-[80%]'>
      <div className=' text-[20px] md:text-[40px] font-[800] text-white mb-[26px] md:mb-[16px] tracking-widest text-center'>OUR PRODUCTS</div>
      <div className=' text-[12px] md:text-[20px] text-[rgba(255,255,255,0.7)] tracking-widest text-center'>Transforming your brand’s identity through meticulously designed custom uniforms. From professional chic to team spirit, we design the perfect attire for every setting.</div>
      <div className=' flex flex-wrap justify-center gap-[20px] mt-[52px] md:mt-[72px]' >
        {products.map((product, idx) => (
          <div key={idx} className=' relative h-[100%] w-[295px] group overflow-hidden rounded-lg'>
            <img
              className=' w-full h-full object-contain'
              src={product.img}
              alt={`product-${idx+1}`}
              loading='lazy'
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,64,168,0.6)_0%,_rgba(151,71,255,0.6)_100%)]  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-[40px] font-[800] text-center px-4">{product.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProducts
