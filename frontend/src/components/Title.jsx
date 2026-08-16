import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-brand-muted'>{text1} <span className='text-brand-dark font-medium' >{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] bg-brand-muted/40' ></p>
    </div>
  )
}

export default Title
