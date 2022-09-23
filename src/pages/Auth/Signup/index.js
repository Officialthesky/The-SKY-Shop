import React from 'react';
import './index.css';
export default function AuthSignup() {
  return (
    <div className='authSignUp'>
      <div className='createAccountModal'>
        <h2 className='inputHeading'>Sign Up to view your profile</h2>
        <form className='signUpForm'>
          <label className='inputLabel'>
            First Name
            <input name='firstName' className='inputBox' type='text' />
          </label>

          <label className='inputLabel'>
            Last Name
            <input name='lastName' className='inputBox' type='text' />
          </label>

          <label className='inputLabel'>
            Email
            <input name='email' className='inputBox' type='email' />
          </label>

          <label className='inputLabel'>
            Password
            <input name='password' className='inputBox' type='password' />
          </label>

          <label className='inputLabel'>
            Confirm Password
            <input name='confirmPwd' className='inputBox' type='password' />
          </label>

          <button className='signUpBtn'>Create New Account</button>
        </form>
      </div>
    </div>
  );
}
