import React from 'react'
import '../styles/Payout.css';

const Payout = () => {
  return (
    <div className="home">
      <div className="row">
        <div class="col-lg-8 products-container">
          <div>
          <p class="p-text-1">Shopping Cart</p>
          <p class="p-text-2">Deselect all items</p>
          </div>
          <div></div>

        </div>
        <div class="col-lg-4 ">
          <div class="payment-container">

          </div>
          <div class="checkout-container">

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Payout;