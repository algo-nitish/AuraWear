import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-brand-muted/30'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-brand-bg'>
        <div className='text-brand-dark' >
          
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-brand-accent'></p>
            <p className='font-medium text-sm md:text-base text-brand-muted'>OUR BEST SELLERS</p>
          </div>
            
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-brand-dark' >Latest Arrivals</h1>
            
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base hover:text-brand-muted transition-colors cursor-pointer'>SHOP NOW</p>
              <p className='w-8 md:w-11  h-[1px] bg-brand-dark'></p>
            </div>
          
          </div>
        </div> 

        {/* Hero Right Side */}
        <img className='w-full sm:w-1/2 object-cover max-h-[60vh] sm:max-h-[70vh]' src={assets.hero_img} alt="" />
      </div>
  )
}

export default Hero
