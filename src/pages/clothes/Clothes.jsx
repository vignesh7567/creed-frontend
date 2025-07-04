import React from 'react'

import bg from '../../assets/clothes/bg.png'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'

const Clothes = () => {
  return (
    <div className='p-[20px] md:p-[100px] flex flex-col mb-[50px] md:mb-[200px]'>
      <div className=' w-full'>
        <img src={bg} alt='bg' />
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  )
}

export default Clothes
