import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl  pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
        <img className='w-full md:max-w-[480px] h-[400px] object-cover' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-brand-dark' >Our Store</p>
          <p className='text-brand-muted' >Shastri Nagar <br /> Ghaziabad, Uttar Pradesh, India</p>
          <p className='text-brand-muted' >Tel: +91-992-776-4287 <br /> Email: nitishchauhan.dev@gmail.com</p>
          <p className='font-semibold text-xl text-brand-dark'>Careers at AuraWear</p>
          <p className='text-brand-muted'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-brand-dark hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
       <NewsLetterBox />

    </div>
  )
}

export default Contact
