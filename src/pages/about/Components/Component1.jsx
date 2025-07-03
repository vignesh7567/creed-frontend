import React from 'react'

import founder from '../../../assets/aboutus/founder.png'

const Component1 = () => {
  return (
    <div className=' flex justify-between text-white items-center gap-[40px]'>
      <div className=' flex flex-col justify-start w-[70%]'>
        <div className=' font-[800] text-[32px] pb-[32px]'>About The Creed</div>
        <div className=' text-[24px] font-[600] pb-[30px]'>Introducing The Creed – a bespoke clothing and uniform company based in the heart of the United Arab Emirates since 2020. At The Creed, we specialize in crafting stylish, comfortable, durable, and functional apparel tailored for modern businesses. Our expertise lies in delivering high-quality solutions for Corporate Uniforms, Custom Clothing, Merchandise, Sustainable Fashion, and Corporate Gifting.</div>
        <div className=' text-[24px] font-[600]'>From concept to creation, we empower businesses with apparel that does more than just dress – it strengthens identity, enhances confidence, and elevates workplace culture.</div>
      </div>
      <div className=' flex flex-col items-center justify-center text-center'>
        <img src={founder} className=' w-[257px]' />
        <div className=' text-[40px] font-[600]'>SURIAYA TAUFIQ</div>
        <div className=' text-[32px] font-[500]'>Founder & CEO</div>
      </div>
    </div>
  )
}

export default Component1
