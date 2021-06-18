import React from 'react'
import '../styles/Payout.css';


const Orders = () => {
 

  return (
    <div className="po-container">
      <div className="row">
        <div class="col-lg-8 products-container2">
          <div>
          <p class="payo-txt-1">Shopping Cart</p>
          <p class="po-txt-2">Deselect all items</p>
          <p></p>
          </div>
          {cart?.map((item) => (
                    <div class="mb-3">
                      
                            <div className="col-12 cart-details">
                             <p className="my-1">{item.name}</p>
                             <strong className="my-2">{item.price}</strong>
                            <div class="d-flex">
                            <p>cancel your order </p>
                             <p>Track your order </p>   
                            </div>
                            </div>
                   </div>
               ))}
  

        </div>
      </div>
    </div>
  );
}

export default Orders;