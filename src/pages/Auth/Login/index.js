import React from 'react';
import './index.css';
export default function AuthLogin() {
  return (
    <div className='authLogin'>
      <div className='loginModal'>
        <h2 className='inputHeading'>Login here</h2>
        <form className='loginForm'>
          <label className='inputLabel'>
            Email
            <input name='email' className='inputBox' type='email' />
          </label>

          <label className='inputLabel'>
            Password
            <input name='password' className='inputBox' type='password' />
          </label>
          <button className='loginBtn'>Login</button>
          <button className='guestLoginBtn'> Guest Login</button>
        </form>
      </div>
    </div>
  );
}
