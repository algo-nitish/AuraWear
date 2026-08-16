import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="AuraWear" className='mb-5 w-24 invert-dark mix-blend-multiply'/>
            <p className='w-full md:w-2/3 text-brand-muted'>
              AuraWear – Your ultimate destination for trendy and affordable shopping. 
              We bring you the best quality products with a seamless online experience, 
              because great style should last forever.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-brand-dark'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-brand-muted'>
                <li 
                  onClick={() => handleNavigation('/')} 
                  className='cursor-pointer hover:text-brand-accent transition-colors'
                >
                  Home
                </li>
                <li 
                  onClick={() => handleNavigation('/about')} 
                  className='cursor-pointer hover:text-brand-accent transition-colors'
                >
                  About Us
                </li>
                <li 
                  onClick={() => handleNavigation('/contact')} 
                  className='cursor-pointer hover:text-brand-accent transition-colors'
                >
                  Contact US
                </li>
                <li className='cursor-pointer hover:text-brand-accent transition-colors'>
                  Privacy Policy
                </li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-brand-dark'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-brand-muted'>
                <li>Phone: +91-992-776-4287</li>
                <li>Email: nitishchauhan.dev@gmail.com</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center text-brand-muted'>
          Copyright 2026@ aurawear.com - All Rights Reserved
        </p>    
      </div> 

    </div>
  )
}

export default Footer
