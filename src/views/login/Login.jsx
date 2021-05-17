import React, { useState } from 'react';
import '../../style/Login.css';

import logo from '../../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="full-screen">
      <div className="login-container">
        <img className="logo" src={logo} alt="" />

        <form action="post" className="login-form">
          <div className="auth-heading">Sign-In</div>
          <div className="field">Email</div>
          <div className="ui input">
            <input type="text" name="" id="" />
          </div>
          <div className="field">Password</div>
          <div className="ui input">
            <input type="password" name="" id="" />
          </div>

          <button className="ui button auth-btn">Login</button>
        </form>

        <div className="separator" style={{ margin: '4% 0' }}>
          New Here?
        </div>

        <button className="ui button" style={{ width: '90%', margin: 'auto' }}>
          Create New Account
        </button>
        <div className="separator" style={{ margin: '4% 0' }}>
          Wanna Sell Here?
        </div>

        <button className="ui button" style={{ width: '90%', margin: 'auto' }}>
          Create A Seller Account
        </button>
      </div>
    </div>
  );
};

export default Login;
