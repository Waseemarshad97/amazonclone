import React,{useContext, useEffect, useState } from 'react'
import '../styles/Payout.css';
import { Rating } from '@material-ui/lab';
import {StateContext} from '../context/StateProvider';
import { db } from "../firebase.js";

const Payout = () => {
  const [address, addAddress] = useState({})
  const [{ orderbook, cart }, dispatch] = useContext(StateContext);
  const user = JSON.parse(localStorage.getItem('authUser'));

  useEffect(()=> {
    getAddress();
    console.log('working');
  }, []);

  const getAddress = () => {
    if (user) {
      db.collection("address").doc(user.uid).get()
      .then((doc) => {
        addAddress(doc.data());
        console.log(doc.data());
      })
      .catch((error) => {
        console.error("Error reading document: ", error);
      });
    }
  }

  const setAddress = () => {
    addAddress({
      address: address.address,
      city: address.city,
      state: address.state,
      country: address.country,
    });
    if(user) {
      db.collection("address").doc(user.uid).set(address)
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    }
  }

const handleCheckout = () => {
  if (user && cart) {
    var p_ids = [];
    cart.map((product) => {
      p_ids.push(product.id);
    });
    db.collection("orders").doc().set(
      {
        user_uid: user.uid,
        cart: p_ids,
        address: address
      }
    )
    .then(()=>{alert("Order Placed Sucessfully")})
    .catch(()=>{alert("Unable to place order. Please try again later.")});
  }
}


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
                    <div className="row box-2">
                         <img className="col-6 cart-img"
                         src={item.image}
                             alt="name"/>
                         <div className="col-6 cart-details">
                             <strong>{item.description}</strong>
                             <p className="my-1">{item.name}</p>
                             <strong className="my-2">{item.price}</strong>
                             <Rating name="half-rating-read" value={item.rating} defaultValue={2.5} precision={0.5} readOnly />
                         </div>
                     </div>
                   </div>
               ))}
  

        </div>
        <div class="col-lg-4 ">
          <div class="payment-container-2">
            <div class="products-container3">
              <p class="payo-txt-2">Address</p>
              <form>
                <input class="mb-4 inputone" placeholder="Address" onChange={(e) => addAddress({...address,address:e.target.value})} value={address?.address} />
                <input class="mb-4 inputone" placeholder="city" onChange={(e) => addAddress({...address,city:e.target.value})} value={address?.city} />
                <input class="mb-4 inputone" placeholder="state" onChange={(e) => addAddress({...address,state:e.target.value})} value={address?.state} />
                <input class="mb-4 inputone" placeholder="Country" onChange={(e) => addAddress({...address,country:e.target.value})} value={address?.country} />
              </form>
              <button class="btn payoutbtn" type="button" onClick={setAddress}>Save Address</button>
            </div>
          </div>
          <div class="checkout-container-2 mt-2">
            <div class="products-container2">
              <p class="payo-txt-2">Sub-Total : </p>
              <button class="btn payoutbtn" type="button" onClick={handleCheckout}>Proceed To payment</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Payout;