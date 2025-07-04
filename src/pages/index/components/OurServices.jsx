import React from 'react'
import { useNavigate } from 'react-router-dom'

import serviceimg1 from '../../../assets/service1.png'
import serviceimg2 from '../../../assets/service2.png'
import serviceimg3 from '../../../assets/service3.png'
import serviceimg4 from '../../../assets/service4.png'
import serviceimg5 from '../../../assets/service5.png'

const services = [
    {
        "id": 1,
        "title": "EXPORTS",
        "description": "Reliable large-scale apparel and merchandise exports with fast turnaround and global delivery capabilities. Premium quality, worldwide.",
        "image": serviceimg1,
        "reDireactLink": "/exports"
    },
    {
        "id": 2,
        "title": "B2B PRODUCTS",
        "description": "We supply clothing and merchandise to other brands and uniform companies — fully finished or white-labeled — with unmatched flexibility.",
        "image": serviceimg2,
        "reDireactLink": "/b2b"
    },
    {
        "id": 3,
        "title": "CUSTOM CLOTHING",
        "description": "Tailored apparel made just for your brand. From fabric to fit, we design and deliver fully customized clothing for businesses, events, and teams. Unique styles, premium finishes, and total flexibility.",
        "image": serviceimg3,
        "reDireactLink": "/clothes"
    },
    {
        "id": 4,
        "title": "CORPORATE UNIFORMS",
        "description": "Professional, functional, and made to last. Outfit your workforce with stylish, comfortable uniforms that reflect your brand and enhance productivity across all industries.",
        "image": serviceimg4,
        "reDireactLink": "/uniforms"
    },
    {
        "id": 5,
        "title": "BRAND & CREATIVE DIRECTION",
        "description": "Bring your brand to life visually. From logo placement to full apparel collections, we help shape your brand identity through expert design, styling, and sourcing — minus the marketing.",
        "image": serviceimg5,
        "reDireactLink": "/brand"
    }
]

const OurServices = () => {
  const navigate = useNavigate()
  return (
    <div id='services' className=' flex flex-col gap-[40px] md:gap-[100px] w-[70%] sm:w-[85%] pt-[20px] md:pt-0 '>
      <div className=' flex text-white text-center items-center justify-center text-[20px] md:text-[40px] font-[800] tracking-widest'>OUR SERVICES</div>
      <div className=' flex flex-wrap justify-center items-stretch gap-[40px] sm:gap-[20px]'>
        {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow flex flex-col w-[400px] overflow-hidden text-center md:text-start border-[1px] border-[rgba(255,255,255,0.7)]">
                <img src={service.image} alt={service.title} className="w-full object-contain" />
                <div className="text-[20px] sm:text-[30px] font-[700] px-[10px] md:px-[20px] leading-7 pt-[13px] pb-[3px]">{service.title}</div>
                <p className="mb-[62px] md:mb-[82px] text-[16px] md:text-[10px] px-[10px] md:px-[20px] text-[rgba(20,25,66,0.7)]">{service.description}</p>
                <button onClick={()=>{navigate(service.reDireactLink)}} className="mt-auto mx-[10px] md:mx-[20px] mb-[10px] md:mb-[20px] text-[15px] md:text-[20px] font-[500] px-4 py-2 bg-[rgba(212,50,61,1)] border-1 border-[rgba(212,50,61,0.45)] hover:bg-white hover:text-red-600 hover:border-red-600 cursor-pointer text-white rounded">
                    EXPLORE SERVICES
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
