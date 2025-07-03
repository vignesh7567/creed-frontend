import React from 'react'
import desktopbg1 from '../../../assets/desktop-bg1.png'

const ImageContainer = () => {
  return (
    <div className=' text-white'>
      <img src={desktopbg1} alt='img1' className=' h-full w-full object-contain' />
      <div className=' py-[160px] flex flex-col gap-[65px] items-center justify-center text-center'>
        <div className=' text-[40px] font-bold tracking-widest'>THE CREED</div>
        <div className=' w-[60%] font-[24px] text-[rgba(255,255,255,0.7)]'>
            The Creed is a global product solutions company specializing in exports, design, and apparel manufacturing. We bridge the gap between manufacturing excellence and global markets, providing end-to-end solutions for businesses looking to scale their product offerings.
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
