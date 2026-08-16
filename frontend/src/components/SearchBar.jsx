import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';
const SearchBar = () => {

   const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
   const [visible, setvisible] = useState(false);
   const location = useLocation();

   useEffect(() => {
       // Search bar can now be toggled globally by clicking the search icon
   }, [location])

   const navigate = useNavigate();

   const handleSearchInput = (e) => {
     setSearch(e.target.value);
     if (location.pathname !== '/collection') {
        navigate('/collection');
     }
   }

  return showSearch ? (
    <div className='border-t border-b bg-brand-bg text-center'>

        <div className='inline-flex items-center justify-center border border-brand-muted/50 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-brand-bg/50' >
         <input value={search} onChange={handleSearchInput}  className='flex-1 outline-none bg-inherit text-sm text-brand-dark placeholder-brand-muted' type='text' placeholder='Search'/>
            <img className='w-4'  src={assets.search_icon} alt="" />
        </div>
        <img onClick={() => setShowSearch(false)}  className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
      
    </div>
  ) : null
}

export default SearchBar
