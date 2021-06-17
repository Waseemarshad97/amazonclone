import React from 'react'
import '../styles/Payout.css';
import { Rating } from '@material-ui/lab';

const Payout = () => {
  return (
    <div className="po-container">
      <div className="row">
        <div class="col-lg-8 products-container2">
          <div>
          <p class="payo-txt-1">Shopping Cart</p>
          <p class="po-txt-2">Deselect all items</p>
          </div>
          <div>
          <div className="row box-2">
                <img className="col-6 cart-img"
                src="https://typeset-beta.imgix.net/elite-daily/2015/04/05165550/richdadpoordad.jpg?w=375&fit=max&auto=format%2Ccompress"
                    alt="name"/>
                <div className="col-6 cart-details">
                    <strong>a book fo entrepreneurs</strong>
                    <p className="my-1">Rich Dad poor DAd</p>
                    <strong className="my-2">300</strong>
                    <Rating name="half-rating-read" value={1} defaultValue={2.5} precision={0.5} readOnly />
                </div>
            </div>

          </div>

        </div>
        <div class="col-lg-4 ">
          <div class="payment-container-2">
            <div class="products-container3">
              <p class="payo-txt-2">Add Address</p>
              <input class="mb-4 inputone" placeholder="name"></input>
              <input class="mb-4 inputone" placeholder="Address Line"></input>
              <input class="mb-4 inputone" placeholder="Address line 2"></input>
              <input class="mb-4 inputone" placeholder="Town/city"></input>
              <input class="mb-4 inputone" placeholder="Phone number"></input>
              <input class="mb-4 inputone" placeholder="Country"></input>
              <div>
              <button class="btn payoutbtn">Save Changes</button>
            </div>
            </div>
            

          </div>
          <div class="checkout-container-2 mt-2">
            <div class="products-container2">
              <p class="payo-txt-2">Sub-Total : </p>
              <button class="btn payoutbtn">Proceed To payment</button>

            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Payout;