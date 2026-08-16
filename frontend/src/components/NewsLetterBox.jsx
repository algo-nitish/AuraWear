import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
    event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-brand-dark'>Subscribe now & get 20% off</p>
      <p className='text-brand-muted mt-3'>Stay ahead of fashion trends! Get exclusive access to new collections, seasonal styles, and member-only discounts. Be the first to shop our latest arrivals before they sell out.</p>   
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none'  type='email' placeholder='Enter your email' required/>
        <button type='submit' className='bg-brand-dark text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
