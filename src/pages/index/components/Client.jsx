import React from 'react'

import client1 from '../../../assets/client/client1.png'
import client2 from '../../../assets/client/client2.png'
import client3 from '../../../assets/client/client3.png'
import client4 from '../../../assets/client/client4.png'
import client5 from '../../../assets/client/client5.png'
import client6 from '../../../assets/client/client6.jpg'
import client7 from '../../../assets/client/client7.jpg'
import client8 from '../../../assets/client/client8.jpg'
import client9 from '../../../assets/client/client9.jpg'
import client10 from '../../../assets/client/client10.jpg'
import client11 from '../../../assets/client/client11.jpg'
import client12 from '../../../assets/client/client12.jpg'
import client13 from '../../../assets/client/client13.jpg'
import client14 from '../../../assets/client/client14.jpg'
import client15 from '../../../assets/client/client15.jpg'
import client16 from '../../../assets/client/client16.jpg'
import client17 from '../../../assets/client/client17.jpg'
import client18 from '../../../assets/client/client18.jpg'
import client19 from '../../../assets/client/client19.jpg'
import client20 from '../../../assets/client/client20.jpg'
import client21 from '../../../assets/client/client21.jpg'
import client22 from '../../../assets/client/client22.jpg'
import client23 from '../../../assets/client/client23.jpg'

const clients = [
  client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12,
  client13, client14, client15, client16, client17, client18, client19, client20, client21, client22, client23
]

const Client = () => {
  return (
    <div id="client" className=' flex flex-col mt-[100px] text-white justify-center items-center w-[90%] md:w-[80%]'>
        <div className=' text-[20px] md:text-[40px] font-[800] mb-[18px] md:mb-[25px] tracking-widest text-center'>OUR CLIENTS</div>
        <div className=' text-[12px] md:text-[20px] font-[500] tracking-widest mb-[40px] md:mb-[100px]'>Brands We’ve Worked With</div>
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll-horizontal whitespace-nowrap w-max">
            {[...clients, ...clients].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="client"
                className="w-[113px] md:w-[190px] inline-block rounded-[13px] mx-[7.5px] md:mx-[25px]"
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Client