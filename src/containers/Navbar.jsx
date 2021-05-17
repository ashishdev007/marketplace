import React from 'react';
import '../style/Navbar.css';
import logo from '../assets/logo.png';
import gps from '../assets/gps.svg';

const Navbar = () => {
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
      <div class="ui left action input right icon" id="product-search">
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
      <a href="#login">Login</a>
    </div>
  );
};

export default Navbar;
