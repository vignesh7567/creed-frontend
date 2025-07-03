import React from 'react'

import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import Component4 from './Components/Component4'
import Component5 from './Components/Component5'
import Component6 from './Components/Component6'
import Component7 from './Components/Component7'

const About = () => {
  return (
    <div className='bg-[linear-gradient(117.22deg,_#261945_0%,_#341B3E_51.34%,_#401D38_98.88%)] flex flex-col justify-center items-center px-[80px]'>
      <div className=' text-[48px] font-[800] text-white mt-[40px] mb-[100px]'>About</div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  )
}

export default About
