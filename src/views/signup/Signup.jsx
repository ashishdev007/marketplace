import React, { useEffect, useState } from 'react';
import '../../style/Auth.css';

import logo from '../../assets/logo.png';

const Signup = () => {
  const [isBuyer, setIsBuyer] = useState(true); // True if url is ".../signup/seller"

  /**
   * Set the value of isBuyer based on url
   */
  useEffect(() => {
    let loc = window.location.href.split('/');
    if (loc[loc.length - 1] == 'seller') {
      setIsBuyer(false);
    } else {
      setIsBuyer(true);
    }
  }, []);

  return (
    <div className="full-screen">
      <div className="login-container">
        <img className="logo" src={logo} alt="" />

        <form action="post" className="login-form">
          <div className="auth-heading">Sign-Up</div>
          {isBuyer ? (
            <>
              <div className="field">First Name</div>
              <div className="ui input">
                <input type="text" name="" id="" />
              </div>
              <div className="field">Last Name</div>
              <div className="ui input">
                <input type="text" name="" id="" />
              </div>
            </>
          ) : (
            <>
              <div className="field">Full Name or Company Name</div>
              <div className="ui input">
                <input type="text" name="" id="" />
              </div>
            </>
          )}
          <div className="field">Email</div>
          <div className="ui input">
            <input type="text" name="" id="" />
          </div>
          <div className="field">Phone No.</div>
          <div className="ui input">
            <input type="text" name="" id="" />
          </div>
          <div className="field">Password</div>
          <div className="ui input">
            <input type="password" name="" id="" />
          </div>
          <div className="field">Confirm Password</div>
          <div className="ui input">
            <input type="password" name="" id="" />
          </div>
          <button type="submit" className="ui button auth-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
