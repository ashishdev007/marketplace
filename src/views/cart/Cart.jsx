import React, { useState } from 'react';
import '../../style/Cart.css';
import image1 from '../../assets/products/drills/1.jpg';
import saw from '../../assets/products/others/electric_saw.jpg';
import TermsAndConditions from '../terms/TermsAndConditions';

const Cart = () => {
  const [showTerms, setShowTerms] = useState(false);
  const getCards = () => {
    let images = [image1, saw];
    let desc = [
      'BLACK+DECKER 20V Max Cordless Drill / Driver with 30-Piece Accessories (LD120VA)',
      'Circular Saw, HYCHIKA 1500W/12.5A Corded Electric Saw with 5500RPM, 2Pcs Blades(24T+ 40T) Plus 1 Allen Wrench, Max Cutting Depth 2-1/2" (90°), 1-4/5" (45°)',
    ];

    return images.map((i, no) => {
      return (
        <div className="ui segment myCard" key={no}>
          <img src={i} alt="" />
          <div className="description flex" style={{ flexDirection: 'column' }}>
            <p style={{ fontSize: '1.25em', fontWeight: '600' }}>{desc[no]}</p>
            <div className="flex-fill"></div>
            <div className="flex">
              <div>
                <div className="ui icon button">
                  <i class="ui minus icon" />
                </div>
                <span style={{ margin: '0 10px' }}>1</span>
                <div className="ui icon button">
                  <i class="ui add icon" />
                </div>
              </div>
              <div className="flex-fill"></div>
              <div className="price">$10.00</div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="card-container">
        <h1 className="ta-center">Your Cart</h1>
        <hr />
        {getCards()}
        <div className="total ta-right">
          <div>Gross Sum: $40.00</div>
          <div>Tax: $5.00</div>
          <div className="bold">Total: $45.00</div>
          <button
            className="ui green button center"
            onClick={() => setShowTerms(true)}
          >
            Checkout
          </button>
        </div>
      </div>
      {showTerms && <TermsAndConditions setDisplay={setShowTerms} />}
    </>
  );
};

export default Cart;
