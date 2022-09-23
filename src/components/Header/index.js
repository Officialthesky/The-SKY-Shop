import React, { useState } from 'react';
import './index.css';
import { BsHandbag } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function Header() {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const showSignUpModal = () => {
    setOpenSignUpModal(!openSignUpModal);
  };
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
        <div className='profileItem' onClick={showSignUpModal}>
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
      {openSignUpModal ? (
        <div className='headerSignupModal'>
          <h2>Hello User</h2>
          <p>To access your account</p>
          <Link to='/signup'>
            <button className='signUpBtn'>Sign Up</button>
          </Link>
          <hr></hr>
          <div className='myOrders'>
            <BsHandbag />
            <p>My Orders</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
