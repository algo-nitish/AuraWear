import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext);
    return (
    <Link className='text-brand-dark cursor-pointer block group p-2 hover:shadow-xl transition-all duration-300 rounded-md bg-brand-bg hover:-translate-y-1 border border-transparent hover:border-brand-muted/10'  to={`/product/${id}`} >
    <div className='overflow-hidden rounded-md' >
      <img className='group-hover:scale-105 transition-transform duration-500 ease-out'  src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm text-brand-muted group-hover:text-brand-dark transition-colors'>{name}</p>
    <p className='text-sm font-medium'>{currency}{price}</p> 
    </Link>
  )
}

export default ProductItem
