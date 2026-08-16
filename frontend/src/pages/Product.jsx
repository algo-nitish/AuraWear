import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = async () => {
     products.map((item) => {
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
     })
  }

  useEffect(() => {
   fetchProductData();
  }, [productId, products])

  return productData ? (
    <div  className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------------- product Data --------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* --------------- product Images --------------- */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
           {
            productData.image.map((item,index) => (
              <img onClick={() =>setImage(item)}  src={item}  key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer' alt="" />
            ))
           }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto'  src={image} alt="" />
        </div>
      </div>

      {/* -------------- Product Info --------------- */}

      <div className='flex-1'>
        <h1 className='font medium text-2xl mt-2 ' >{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2' >
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          <p className='pl-2' >(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium ' >{currency}{productData.price}</p>
        <p  className='mt-5 text-brand-muted md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item,index) => (
                  <button onClick={() => setSize(item)} className={`border py-2 px-4 transition-all ${item === size ? 'border-brand-accent bg-brand-accent text-white shadow-md': 'border-brand-muted/30 bg-brand-bg text-brand-dark hover:border-brand-accent'}`}  key={index}>{item}</button>
                ))}
            </div>
        </div>
        <div className='flex items-center gap-4 mt-8'>
          <div className='flex items-center border border-brand-muted/30 h-11 rounded-md overflow-hidden'>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className='px-4 h-full bg-brand-bg hover:bg-brand-accent/20 text-lg border-r border-brand-muted/30 text-brand-dark transition-colors'>-</button>
            <span className='px-4 text-center w-12 text-brand-dark font-medium'>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className='px-4 h-full bg-brand-bg hover:bg-brand-accent/20 text-lg border-l border-brand-muted/30 text-brand-dark transition-colors'>+</button>
          </div>
          <button onClick={() => addToCart(productData._id,size,quantity)} className='bg-brand-dark text-white px-8 py-3 text-sm hover:bg-brand-accent transition-all shadow-lg active:scale-95 h-11 rounded-md'>ADD TO CART</button>
        </div>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-brand-muted mt-5 flex flex-col gap-1'>
           <p>100% Original product.</p>
           <p>Cash on delivery is available on this product.</p>
           <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
       
       {/* --------------- Description & review Section ---------------- */}
      
      <div className='mt-20' >
        <div className='flex'>
            <b className='border px-5 py-3  text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-brand-muted'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores, itaque sit facilis eveniet, delectus optio qui corrupti eius praesentium dicta maiores culpa autem odit reprehenderit labore similique quaerat saepe.</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo enim tenetur deserunt provident sit molestiae repellendus! Magni, quae. Architecto culpa deserunt totam eos quidem eveniet ea officia, aspernatur fugiat. Facere.</p>
        </div>
      </div>

      {/* -------------- display related products ----------------- */}

          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ): <div className='opacity-0'></div>
}

export default Product
