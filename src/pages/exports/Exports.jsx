import React from 'react'

import bg from '../../assets/exports/bg.png'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'

const ExportsPage = () => {
  return (
    <div className='p-[20px] md:p-[100px] flex flex-col mb-[100px]'>
      <div className=' w-full'>
        <img src={bg} alt='bg' loading="lazy" />
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  )
}

export default ExportsPage
