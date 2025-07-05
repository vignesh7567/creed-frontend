import React from 'react'

import mission from '../../../assets/aboutus/mission.png'

const Component4 = () => {
  return (
    <div className=' text-white mt-[50px] md:mt-[100px] flex flex-col md:flex-row justify-between gap-[10px] items-center text-center md:text-start'>
      <div className=' md:w-[50%]'>
        <div className=' font-[800] text-[20px] md:text-[32px] pb-[20px] md:pb-[52px]'>Our Mission</div>
        <div className=' text-[13px] md:text-[24px] md:font-[600] mb-[42px] md:mb-0'>To empower businesses through clothing that enhances performance, communicates brand identity, and contributes positively to people and the planet.</div>
      </div>
      <div className=' md:w-[50%] flex justify-end'>
        <img className=' w-[613px]' src={mission} alt='mission' loading="lazy" />
      </div>
    </div>
  )
}

export default Component4
