import React from 'react';
import '../../style/Cart.css';
import image1 from '../../assets/products/drills/1.jpg';

const Cart = () => {
  const getCards = () => {
    let x = [1, 2, 3, 4];

    return x.map((i) => {
      return (
        <div className="ui segment myCard" key={i}>
          <img src={image1} alt="" />
          <div className="description flex" style={{ flexDirection: 'column' }}>
            <p style={{ fontSize: '1.25em', fontWeight: '600' }}>
              BLACK+DECKER 20V Max Cordless Drill / Driver with 30-Piece
              Accessories (LD120VA)
            </p>
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
    <div className="card-container">
      <h1 className="ta-center">Your Cart</h1>
      <hr />
      {getCards()}
      <div className="total ta-right">
        <div>Gross Sum: $40.00</div>
        <div>Tax: $5.00</div>
        <div className="bold">Total: $45.00</div>
        <button className="ui green button center">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
