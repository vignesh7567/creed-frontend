import React from 'react'
import ContactUsForm from '../../../components/ContactUsForm'

const ContactUs = () => {
  return (
    <div className='text-white mt-[90px] md:mt-[163px] mb-[109px] flex flex-col items-center w-[90%]'>
      <div className=' text-[20px] md:text-[40px] font-[800] tracking-widest pb-[16px]'>CONTACT US</div>
      <div className=' text-[rgba(255,255,255,0.7)] text-[12px] font-[500] md:text-[20px] tracking-widest pb-[35px] md:pb-[72px] text-center px-2'>Interested in working with us? Get in touch to discuss your product and export needs.</div>
      <ContactUsForm />
    </div>
  )
}

export default ContactUs
