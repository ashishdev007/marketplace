import React from 'react';
import '../../style/Cart.css';
import jack from '../../assets/products/others/jack.png';
import lawnmower from '../../assets/products/others/lawnmower.webp';

const Orders = () => {
  return (
    <div className="card-container">
      <h1 className="ta-center">Your Orders</h1>
      <hr style={{ marginBottom: '2em' }} />
      <div className="ui segment myCard">
        <img src={lawnmower} alt="" />
        <div className="description flex" style={{ flexDirection: 'column' }}>
          <p
            style={{
              fontSize: '1.25em',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            Greenworks 40V 16-Inch Cordless (2-In-1) Push Lawn Mower, 4.0Ah
            Battery and Charger Included 25322
          </p>
          <div className="flex-fill"></div>
          <div className="flex">
            <div className="green-text">Status: Waiting for pickup</div>
            <div className="flex-fill"></div>
            <div>Pickup Location: 301 N Bon Aire, Monroe</div>
          </div>
        </div>
      </div>
      <div className="ui segment myCard">
        <img src={jack} alt="" />
        <div className="description flex" style={{ flexDirection: 'column' }}>
          <p
            style={{
              fontSize: '1.25em',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            Mophorn 3600W Electric Demolition Hammer Heavy Duty Concrete Breaker
            1800 BPM Jack Hammer Demolition Drills with Flat Chisel Bull Point
            Chisel (3600 W)
          </p>
          <div className="flex-fill"></div>
          <div className="flex">
            <div className="green-text">Status: Product Acquired</div>
            <div className="flex-fill"></div>
            <div>Return by: 08/21/2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
