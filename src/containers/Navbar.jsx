import React from 'react';
import { useHistory } from 'react-router-dom';

import '../style/Navbar.css';
import logo from '../assets/logo.png';
import gps from '../assets/gps.svg';

const Navbar = () => {
  const history = useHistory();

  return (
    <div class="topnav">
      <img id="logo" src={logo} alt="logo" />
      <div class="address-selection">
        <img src={gps} alt="" />
        <div>
          <div>Hello</div>
          <div>Select Your Address</div>
        </div>
      </div>
      <form
        id="product-search"
        onSubmit={(e) => {
          e.preventDefault();
          history.push('/products/drill');
        }}
      >
        <div class="ui left action input right icon" style={{ width: '100%' }}>
          <select class="ui compact selection dropdown">
            <option value="all">All</option>
            <option selected="" value="articles">
              Articles
            </option>
            <option value="products">Products</option>
          </select>
          <input type="text" placeholder="Search..." />
          <i class="search icon"></i>
        </div>
      </form>
      <div className="flex">
      <i class="shopping cart icon" onClick={() => history.push("/cart")}></i>
      </div>
      <a href="login">Login</a>
    </div>
  );
};

export default Navbar;
