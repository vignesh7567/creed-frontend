import React from 'react'

import bg from '../../assets/b2b/bg.png'
import Component1 from './components/component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Compoent4 from './components/Compoent4'
import Component5 from './components/Component5'

const B2b = () => {
  return (
    <div className=' p-[20px] md:p-[100px] flex flex-col mb-[50px] md:mb-[200px]'>
      <div className=' w-full'>
        <img src={bg} alt='bg' />
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Compoent4 />
      <Component5 />
    </div>
  )
}

export default B2b
