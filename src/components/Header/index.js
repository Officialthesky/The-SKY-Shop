import React from 'react';
import './index.css';
import { GrSearch } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
export default function Header() {
  return (
    <header>
      <div className='searchInput'>
        <input
          placeholder='Search for products,brands and more'
          className='placeInputHere'
        />
        <GrSearch />
      </div>
      <div className='headerProfile'>
        <div className='profileItem'>
          <div className='profileIcon'>
            <CgProfile />
          </div>
          <p className='profileItemName'>Profile</p>
        </div>
        <div className='profileItem'>
          <div className='profileIcon'>
            <AiOutlineShoppingCart />
          </div>
          <p className='profileItemName'>Cart</p>
        </div>
        <div className='profileItem'>
          <div className='profileIcon'>
            <AiOutlineHeart />
          </div>
          <p className='profileItemName'>Wishlist</p>
        </div>
        <div className='headerLoginBtn'>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}
