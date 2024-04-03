import React, { Component } from 'react';
import './login.css';

export class Login extends Component {
    render() {
      return (
        <>
        <div className="container">
    <div className="header-bar"></div>
    <div className="navigation">
      <div  className='login-options'>
        <div className="login-text">Log In</div>
        <div class="login-underline"></div>
      </div>
      <a href='/sign-up' className='dec'><div className="signup-text">Sign Up</div></a>
    </div>
    <div className="form-wrapper">
      <div className="input-group">
        <div className="input-fields">
          <input className='input-name' type="email" placeholder="Name or email" aria-label="Name or email"/>
        </div>
      </div>
      <div className="password-group">
        <input className='input-password' type="password" placeholder="Password" aria-label="Password"/>
      </div>
      <div class="options-container">
      <label className="remember-me">
        <input type="checkbox" class="remember-checkbox" />
        <span className="remember-label">Remember me</span>
      </label>
      <a href="/forgot-password" className="forgot-password">Forgot password?</a>
    </div>
      <button type="submit" className="btn-login">Log in</button>
    </div>
  </div>
  </>
  );
    }
}

export default Login