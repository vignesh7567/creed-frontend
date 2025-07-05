import React, { useEffect, useState } from 'react'
import desktopbg1 from '../../../assets/desktop-bg1.png'
import desktopbg2 from '../../../assets/desktop-bg2.png'
import desktopbg3 from '../../../assets/desktop-bg3.png'

const images = [
  desktopbg1,
  desktopbg2,
  desktopbg3
];

const ImageContainer = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true); // Fade in new image
      }, 500); // Duration of fade out
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' text-white'>
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className={`h-full w-full object-contain transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
      />
      {/* <img src={desktopbg1} alt='img1' className=' h-full w-full object-contain' /> */}
      <div className=' py-[40px] md:py-[160px] flex flex-col gap-[20px] md:gap-[65px] items-center justify-center text-center'>
        <div className=' text-[20px] md:text-[40px] font-bold tracking-widest'>THE CREED</div>
        <div className=' w-[90%] md:w-[60%] font-[15px] md:font-[24px] text-[rgba(255,255,255,0.7)]'>
            The Creed is a global product solutions company specializing in exports, design, and apparel manufacturing. We bridge the gap between manufacturing excellence and global markets, providing end-to-end solutions for businesses looking to scale their product offerings.
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
