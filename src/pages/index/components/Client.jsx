import React from 'react'

import client1 from '../../../assets/client/client1.png'
import client2 from '../../../assets/client/client2.png'
import client3 from '../../../assets/client/client3.png'
import client4 from '../../../assets/client/client4.png'
import client5 from '../../../assets/client/client5.png'

const Client = () => {
  return (
    <div id="client" className=' flex flex-col mt-[100px] text-white justify-center items-center w-[90%] md:w-[80%]'>
        <div className=' text-[20px] md:text-[40px] font-[800] mb-[18px] md:mb-[25px] tracking-widest text-center'>OUR CLIENTS</div>
        <div className=' text-[12px] md:text-[20px] font-[500] tracking-widest mb-[40px] md:mb-[100px]'>Brands We’ve Worked With</div>
        <div className="overflow-hidden w-full">
            <div className="flex gap-[15px] md:gap-[50px] animate-scroll-horizontal whitespace-nowrap">
                <img src={client1} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client2} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client3} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client4} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client5} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                {/* Duplicate for seamless infinite scroll */}
                <img src={client1} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client2} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client3} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client4} alt="client" className="w-[113px] md:w-[190px] inline-block" />
                <img src={client5} alt="client" className="w-[113px] md:w-[190px] inline-block" />
            </div>
        </div>
    </div>
  )
}

export default Client