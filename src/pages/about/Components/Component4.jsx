import React from 'react'

import mission from '../../../assets/aboutus/mission.png'

const Component4 = () => {
  return (
    <div className=' text-white mt-[100px] flex justify-between gap-[10px] items-start'>
      <div className=' w-[50%]'>
        <div className=' font-[800] text-[32px] pb-[52px]'>Our Mission</div>
        <div className=' text-[24px] font-[600]'>To empower businesses through clothing that enhances performance, communicates brand identity, and contributes positively to people and the planet.</div>
      </div>
      <div className=' w-[50%] flex justify-end'>
        <img className=' w-[613px]' src={mission} alt='mission' />
      </div>
    </div>
  )
}

export default Component4
