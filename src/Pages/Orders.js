import React, { useEffect, useState } from 'react'
import '../styles/Payout.css';
import { db } from "../firebase.js";
import Order from '../Component/Order';
import { Link } from 'react-router-dom';

const Orders = () => {
  const user = JSON.parse(localStorage.getItem('authUser'))
  useEffect(() => { getOrders() }, []);
  const [orderList, setorderlist] = useState([]);

  const getOrders = () => {
    if (user) {
      db.collection("orders").where('user_uid', '==', user.uid).get()
        .then((listoforders) => {
          listoforders.forEach((order) => {
            setorderlist((prev) => ([...prev, { ...order.data() }]))
          }
          )
        });
    }
  }

  return (
      <div className="container-fluid po-container">
        <div className="row">
          <div className="col">
            {
              orderList.length ? 
                orderList?.map((order) => (
                <Order cart={order.cart} address={order.address} total={order.total} date={order.orderDate} />
              )) :(
                <div className="row vh-100">
                  <div className="col-8 h-50 mx-auto mt-5 bg-white shadow d-flex flex-column justify-content-center">
                    <h4 className="text-center">No Orders so far...!</h4>
                    <h4 className="text-center">What are you waiting for ???</h4>
                    <h4 className="text-center">Place your first Order now <Link to="/">Click here</Link></h4>
                  </div>
                </div>
              )
            }
          </div>
        </div>
    </div>
  );
}

export default Orders;
