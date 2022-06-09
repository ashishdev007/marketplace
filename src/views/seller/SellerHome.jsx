import React from 'react';
import '../../style/SellerHome.css';

const SellerHome = () => {
  return (
    <div style={{ margin: '2% 5% 0' }}>
      <div>
        <h1 className="ta-center ui header">My Store</h1>
        <div className="ui segment" style={{ padding: '1.75%' }}>
          <h2 className="ui header">Latest Orders</h2>
          <hr />
          <br />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
            }}
          >
            <div className="ui link card lorder">
              <div className="content">
                <div className="header">
                  Greenworks 40V 16-Inch Cordless (2-In-1) Push Lawn Mower,
                  4.0Ah Battery and Charger Included 25322
                </div>
              </div>
              <div className="content">
                Method: <span className="green-text">Pickup</span>
              </div>
            </div>
            <div className="ui link card lorder">
              <div className="content">
                <div className="header">
                  Mophorn 3600W Electric Demolition Hammer Heavy Duty Concrete
                  Breaker 1800 BPM Jack Hammer Demolition Drills with Flat
                  Chisel Bull Point Chisel (3600 W)
                </div>
              </div>
              <div className="content">
                Method: <span className="green-text">Pickup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="ta-center ui header" style={{ marginTop: '2em' }}>
          Inventory
        </h1>
        <div className="ui segment inventoryItem">
          Greenworks 40V 16-Inch Cordless (2-In-1) Push Lawn Mower, 4.0Ah
          Battery and Charger Included 25322
          <div>
            <div className="green-text" style={{ fontSize: '0.91em' }}>
              Rented: 1
            </div>
            <div style={{ fontSize: '0.91em' }}>Remaining: 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
