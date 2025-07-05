import React from 'react'

import client1 from '../../../assets/client/client1.png'
import client2 from '../../../assets/client/client2.png'
import client3 from '../../../assets/client/client3.png'
import client4 from '../../../assets/client/client4.png'
import client5 from '../../../assets/client/client5.png'
import client6 from '../../../assets/client/client6.png'
import client7 from '../../../assets/client/client7.png'
import client8 from '../../../assets/client/client8.png'
import client9 from '../../../assets/client/client9.png'
import client10 from '../../../assets/client/client10.png'
import client11 from '../../../assets/client/client11.png'
import client12 from '../../../assets/client/client12.png'
import client13 from '../../../assets/client/client13.png'
import client14 from '../../../assets/client/client14.png'
import client15 from '../../../assets/client/client15.png'
import client16 from '../../../assets/client/client16.png'
import client17 from '../../../assets/client/client17.png'
import client18 from '../../../assets/client/client18.png'
import client19 from '../../../assets/client/client19.png'
import client20 from '../../../assets/client/client20.png'

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