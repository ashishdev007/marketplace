import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Auth.css';

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

        <Link to="/signup" className="ta-center">
          <button className="ui button" style={{ width: '90%' }}>
            Create New Account
          </button>
        </Link>

        <div className="separator" style={{ margin: '4% 0' }}>
          Wanna Sell Here?
        </div>

        <Link to="/signup/seller" className="ta-center">
          <button className="ui button" style={{ width: '90%' }}>
            Create A Seller Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
