import React, { Component } from 'react';
import './signup.css';

export class Signup extends Component {
    render() {
        return (
            <div className="container">
        <div className="header-banner"></div>
        <div className="main-content">
          <a href='/login' className='dec'><div className="login-title">Log In</div></a>
          <div className='signup-option'>
            <div className="sign-up-title">Sign Up</div>
            <div className='signup-underline'></div>
            </div>
        </div>
        <div className="profile-section">
          <div className="profile-info">
            <div className="name-section">
              <input className='input-name' type="name" placeholder="Name"/>
            </div>
          </div>
          <div className="email-section">
            <input className='input-email'  type="email" placeholder="Email"/>
          </div>
          <div className="password-section">
              <input className='input-password'  type="password" placeholder="Password"/>
          </div>
          <button className="sign-up-button" tabindex="0">Sign Up</button>
        </div>
      </div>
        )

    }
}

export default Signup