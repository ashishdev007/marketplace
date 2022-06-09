import React from 'react';
import '../../style/Cart.css';
import '../../style/AddProduct.css';

const AddProduct = () => {
  return (
    <div className="card-container">
      <h1 className="ta-center">Add Product</h1>
      <hr />
      <div className="form-container">
        <div className="ui input">
          <span className="label">Product Name:</span>
          <input type="text" />
        </div>
        <div className="ui input">
          <span className="label">Product Description:</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div className="ui input">
          <span className="label">Price:</span>
          <div class="ui right labeled input">
            <label for="amount" class="ui label">
              $
            </label>
            <input type="text" placeholder="Amount" id="amount" />
            <div class="ui basic label">.00</div>
          </div>
        </div>

        <div className="ui input">
          <span className="label">Upload Pictures</span>
          <input type="file" id="myFile" name="filename" />
        </div>

        <button className="ui button green">Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
