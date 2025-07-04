import React from 'react'
import logo from '../assets/logo.png'
import instgram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Footer = () => {
  return (
    <div className=' bg-[rgba(0,6,53,1)] text-white px-[20px] md:px-[96px] py-[30px] flex flex-col items-center gap-[79px]'>
      <div className='flex flex-wrap md:flex-row gap-0 md:gap-5 justify-between w-full'>
        {/* <div className=' flex w-full justify-between'> */}
          <div className=' flex flex-col gap-[10px] text-[20px]'>
            <img src={logo} alt="logo" className='w-[100px] md:w-[200px] mb-[10px]'/>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Empower Your Team</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Define Your Style</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Precision Manufacturing</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Personalized Uniforms</div>
            <div className=' flex gap-[12px] md:gap-[20px]'>
              <img src={instgram} alt='instagram logo' className=' w-[28px] md:w-[40px]'/>
              <img src={facebook} alt='facebook logo' className=' w-[28px] md:w-[40px]' />
            </div>
          </div>
          <div className=' flex flex-col'>
            <div className=' text-[12px] md:text-[24px] font-[600] mt-0 md:mt-[20px] mb-[42px]'>Contact Us</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>THE CREED ORIGINALS <br className=' md:hidden'></br> UNIFORMS TRADING L.L.C</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Office 106 B</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Bu Shaqer Building</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>1355 St</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Garhoud</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>Dubai</div>
            <div className=' text-[12px] md:text-[20px] font-[400]'>United Arab Emirates</div>
          </div>
        {/* </div> */}
        <div className=' flex flex-col'>
          <div className=' text-[12px] md:text-[24px] font-[600] mt-[20px] mb-[20px] md:mb-[42px]'>Got Questions?</div>
          <div className=' flex flex-col gap-[6px] md:gap-[20px] pb-[20px] md:pb-[32px]'>
            <div className=' flex text-[12px] md:text-[20px] font-[400] items-center gap-[4px] md:gap-[7px]'>
              <img src={phone} className=' w-[12px] md:w-[18px] h-[12px] md:h-[18px]' />
              +971 50 564 6658
            </div>
            <div className=' flex text-[12px] md:text-[20px] font-[400] items-center gap-[4px] md:gap-[7px]'>
              <img src={mail} className=' w-[11px] md:w-[20px] h-[9px] md:h-[16px]'/>
              suriaya@thecreed.me
            </div>
          </div>
          {/* <div className=' flex flex-col justify-start'>
            <div className=' text-[12px] font-[500] pb-[20px] md:pb-[12px]'>Signup and get in touch with us</div>
            <input 
            type="email"
            placeholder='Enter your email'
            className=' text-[12px] md:text-[16px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded px-[20px] py-[6px]'
            />
            <div className=' mt-[20px]'>
              <button className=' bg-[rgba(212,50,61,1)] text-[16px] px-[70px] py-[8px] rounded cursor-pointer'>Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className=' text-[12px]'>
        Powered By Katana <span>©</span>
      </div>
    </div>
  )
}

export default Footer
