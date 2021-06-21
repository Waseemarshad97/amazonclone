import React, {useContext, useEffect} from 'react'
import '../styles/Payout.css';
import {StateContext} from '../context/StateProvider';
import { db } from "../firebase.js";

const Orders = () => {
  const [{ user, orderbook }, dispatch] = useContext(StateContext);
  // const user = JSON.parse(localStorage.getItem('authUser'))
  console.log('user', user)
  useEffect(() => {getOrders()}, []);

  const getOrders = () => {
    console.log('gigi');
    if (user) {
      db.collection("orders").doc(user.uid).get()
      .then((doc) => {
        // addAddress(doc.data());
        console.log(doc.data());
      })
    }
  }

  return (
    <div className="po-container">
      <div className="row">
        <div class="col-lg-8 products-container2">
          <div>
          <p class="payo-txt-1">Orders</p>
          </div>
          {orderbook?.forEach((item) => (
                    <div class="mb-3">
                            <div className="col-12 cart-details">
                             <p className="my-1">{item.id}</p>
                             <strong className="my-2">{item.name}</strong>
                            <div class="d-flex">
                            <p className="mr-2">cancel your order </p>
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