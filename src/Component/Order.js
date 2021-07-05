import React from 'react';


const Order = ({ cart, address, total, date }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-white m-3">
        <h5 className="m-3">Order Date: {date} </h5>
        <div className="col-12 d-flex flex-wrap p-4">
          {cart.map((cartItem) => (
            <div className="border d-flex flex-column justify-content-between p-2 m-2">
              <img src={cartItem.image} height="100" width="100" alt={cartItem.name} className="img-fluid px-2" /><br />
              <p className="m-0 p-0">{cartItem.name}</p>
              <p className="m-0 p-0">${cartItem.price}</p>
            </div>
          ))
          }
        </div>
        <div className="col-12 d-flex justify-content-between px-5 py-2">
          <div>
            <strong>Delivery Address:</strong>
            <p className="p-0 m-0">{address.address}</p>
            <p className="p-0 m-0">{address.city}</p>
            <p className="p-0 m-0">{address.state}</p>
         </div>
          <strong>Cart total: {' '}${total}</strong>
        </div>
      </div>
    </div>
  )
}
export default Order;