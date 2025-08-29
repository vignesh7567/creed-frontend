import React from 'react'

import founder from '../../../assets/aboutus/founder2.jpg'

const Component1 = () => {
  return (
    <div className=' flex flex-col-reverse md:flex-row justify-between text-white items-center gap-[20px] md:gap-[40px]'>
      <div className=' flex flex-col items-center md:items-start justify-start md:w-[70%]'>
        <div className=' font-[800] text-[20px] md:text-[32px] pb-[12px] mb:pb-[32px]'>About The Creed</div>
        <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600] pb-[30px] text-[rgba(255,255,255,1)] text-center md:text-start'>Introducing The Creed – a bespoke clothing and uniform company based in the heart of the United Arab Emirates since 2020. At The Creed, we specialize in crafting stylish, comfortable, durable, and functional apparel tailored for modern businesses. Our expertise lies in delivering high-quality solutions for Corporate Uniforms, Custom Clothing, Merchandise, Sustainable Fashion, and Corporate Gifting.</div>
        <div className=' text-[13px] md:text-[24px] font-[400] md:font-[600] pb-[30px] text-[rgba(255,255,255,1)] text-center md:text-start'>From concept to creation, we empower businesses with apparel that does more than just dress – it strengthens identity, enhances confidence, and elevates workplace culture.</div>
      </div>
      <div className=' flex flex-col items-center justify-center text-center'>
        <img src={founder} className=' w-[100px] md:w-[257px] rounded-[30px]' loading="lazy" />
        <div className=' text-[20px] md:text-[40px] font-[600] mt-[10px] md:mt-0'>SURIAYA TAUFIQ</div>
        <div className=' text-[16px] md:text-[32px] font-[500] hidden md:block'>Founder & CEO</div>
      </div>
    </div>
  )
}

export default Component1
