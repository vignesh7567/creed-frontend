import React, { useState } from 'react'
import emailjs from "emailjs-com";
import { toast } from 'react-hot-toast'

const ContactUsForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name, email, message);
    
    emailjs.send(
      "service_tdazotg",
      "template_lk9b1qd",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "mq1VG-mzLO5X7c3wM"
    )
    .then(() => {
      toast.success("Message sent!");
      setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to send message.");
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col px-[30px] py-[54px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded'>
      <div className=' flex flex-col gap-1 mb-[30px] md:mb-[40px]'>
        <label className='text-[13px] md:text-[16px] font-[500]'>Name</label>
        <input 
          type='text'
          placeholder='Your name'
          className=' text-[12px] md:text-[16px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[270px] md:w-[441px] text-white font-[400]'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className=' flex flex-col gap-1 mb-[30px] md:mb-[40px]'>
        <label className=' text-[13px] md:text-[16px] font-[500]'>Email</label>
        <input 
          type='email'
          placeholder='Your email'
          className=' text-[12px] md:text-[16px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[270px] md:w-[441px] text-white font-[400]'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className=' flex flex-col gap-1 mb-[30px] md:mb-[40px]'>
        <label className=' text-[13px] md:text-[16px] font-[500]'>Message</label>
        <textarea 
          type='text'
          placeholder='Your Message'
          className=' text-[12px] md:text-[16px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-[20px] py-[10px] rounded w-[270px] md:w-[441px] text-white font-[400] min-h-[176px] resize-none'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className=' text-[14px] md:text-[20px] font-[600] bg-[rgba(212,50,61,1)] py-[12px] rounded cursor-pointer text-center'>
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}

export default ContactUsForm
