import React, {useContext, useEffect, useState} from 'react'
import '../styles/Payout.css';
import {StateContext} from '../context/StateProvider';
import { db } from "../firebase.js";

const Orders = () => {
  const [{ orderbook }, dispatch] = useContext(StateContext);
  const user = JSON.parse(localStorage.getItem('authUser'))
  useEffect(() => {getOrders()}, []);
  const [orderList, setorderlist] = useState([]);

  const getOrders = () => {
    
    if (user) {
      db.collection("orders").where('user_uid','==',user.uid).get()
      .then((listoforders) => {
        listoforders.forEach((order) =>{
          order.data().cart.forEach((product_id) =>{
            db.collection("products").doc(product_id).get()
            .then((item) => {
              console.log(item.data());
              setorderlist((prev) => ([...prev, item.data()]))
              
            }

            );
           }
           );
           
        });
      console.log(orderList);

      });
    }
  }

  return (
    <div className="po-container">
      <div className="row">
        <div class="col-lg-8 products-container2">
          <div>
          <p class="payo-txt-1">Orders</p>
          </div>
          {
          orderList.map((item) => {
            return (
              <div>
                {item.name}
              </div>

            )
        }
        )
          }
        </div>
      </div>
    </div>
  );
}

export default Orders;