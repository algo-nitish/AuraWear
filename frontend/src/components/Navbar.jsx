import React, { useContext, useState, useEffect } from 'react'
import {assets} from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

  const[visible, setvisible] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/' ><img src={assets.logo} className='w-28 invert-dark mix-blend-multiply' alt="AuraWear" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-brand-dark'>
          
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-brand-accent hidden' />
        </NavLink>
          
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-brand-accent hidden ' />
        </NavLink>
          
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-brand-accent hidden ' />
        </NavLink>
          
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-brand-accent hidden' />
        </NavLink>
        
          </ul>
        

        <div className='flex items-center gap-6'>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='text-xl w-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity'>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <img onClick={() => setShowSearch(true)}  src={assets.search_icon} className='w-5 cursor-pointer'  alt='' />

            <div className='group relative' >
              <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                {/* DROP DOWN */}
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50' >
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-brand-bg text-brand-muted border border-brand-muted rounded shadow-xl'>
                    {token ? (
                      <>
                        <p className='cursor-pointer hover:text-brand-accent transition-colors'>My Profile</p>
                        <p onClick={() => navigate('/orders')}  className='cursor-pointer hover:text-brand-accent transition-colors' >Orders </p>
                        <p onClick={logout} className='cursor-pointer hover:text-brand-accent transition-colors' >Logout</p>
                      </>
                    ) : (
                      <p onClick={() => navigate('/login')} className='cursor-pointer hover:text-brand-accent transition-colors' >Login</p>
                    )}
                  </div>
                </div>
            </div>

            <Link to='/cart' className="relative">
               <img src={assets.cart_icon}  className='w-5 min-w-5' alt=""  />
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-brand-accent text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            
            <img  onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

          </div>
      
         {/* Sidebar  menu for small screen  */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-brand-bg transition-all ${visible ? 'w-full' : 'w-0' } `} >
            <div className='flex flex-col text-brand-muted'>
              <div onClick={() => setvisible(false)}  className='flex items-center gap-4 p-3 cursor-pointer'>
                <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
                <p>Back</p>
              </div>
              
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/'>HOME</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
              <NavLink  onClick={() => setvisible(false)}  className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
          </div>
        </div>
  )
}

export default Navbar
