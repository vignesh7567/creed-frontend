import React from 'react'

const ContactUsForm = () => {
  return (
    <div className=' flex flex-col px-[30px] py-[54px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded'>
      <div className=' flex flex-col gap-1 mb-[40px]'>
        <label className=' text-[16px] font-[500]'>Name</label>
        <input 
          type='text'
          placeholder='Your name'
          className=' bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[441px] text-white font-[400]'
        />
      </div>
      <div className=' flex flex-col gap-1 mb-[40px]'>
        <label className=' text-[16px] font-[500]'>Email</label>
        <input 
          type='email'
          placeholder='Your email'
          className=' bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[441px] text-white font-[400]'
        />
      </div>
      <div className=' flex flex-col gap-1 mb-[40px]'>
        <label className=' text-[16px] font-[500]'>Name</label>
        <textarea 
          type='text'
          placeholder='Your name'
          className=' bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[441px] text-white font-[400] min-h-[176px] resize-none'
        />
      </div>
      <button className=' bg-[rgba(212,50,61,1)] py-[12px] rounded cursor-pointer'>Send Messages</button>
    </div>
  )
}

export default ContactUsForm
