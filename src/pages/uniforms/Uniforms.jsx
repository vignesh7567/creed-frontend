import React from 'react'

import bg from '../../assets/uniform/bg.png'
import Component1 from './components/Component1'

const Uniforms = () => {
  return (
    <div className='p-[20px] md:p-[100px] flex flex-col mb-[50px] md:mb-[100px]'>
      <div className=' w-full'>
        <img src={bg} alt='bg' />
      </div>
      <Component1 />
    </div>
  )
}

export default Uniforms
