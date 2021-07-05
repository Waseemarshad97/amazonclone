import React, { useContext, useEffect, useState } from 'react'
import '../styles/Payout.css';
import { Rating } from '@material-ui/lab';
import { StateContext } from '../context/StateProvider';
import { db } from "../firebase.js";
import { getCartTotal } from '../context/reducer';
import { useHistory } from 'react-router-dom';



const Payout = () => {
  const [address, addAddress] = useState({})
  const [{ cart }, dispatch] = useContext(StateContext);
  const user = JSON.parse(localStorage.getItem('authUser'));
  const history = useHistory();

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }
  useEffect(() => {
    getAddress();
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
    if (user) {
      db.collection("address").doc(user.uid).set(address)
        .catch((error) => {
          alert("Error writing document: ", error);
        })
        .then(() => {
          alert("Address saved Successfully")
        })
    }
  }

  const handleCheckout = () => {
    if (user && cart) {

      db.collection("orders").doc().set(
        {
          user_uid: user.uid,
          cart: cart,
          address: address,
          total: getCartTotal(cart),
          orderDate: new Date().toLocaleDateString()
        }
      )
        .then(() => {
          alert("Order Placed Sucessfully");
          clearCart();
          history.push("/Orders");

        })
        .catch(() => { alert("Unable to place order. Please try again later.") });
    }

  }
  return(
    <div className="container-fluid home">
      <div className="row d-flex justify-content-between p-4">
        <div className="col-lg-8 rounded">
          <div className="col-12 p-4 bg-white">
                      <div className="ml-3">
              <p class="payo-txt-1">Shopping Cart</p>
              <p class="po-txt-2">Deselect all items</p>
            </div>
          {cart.length? cart?.map((item) => (
            <div class="box-2 d-block d-md-flex mb-3">
                <div className="col-12 col-md-4">
                  <img className="cart-img img-fluid"
                    src={item.image}
                    alt="name" />
                </div>
                <div className="col-12 col-md-8 cart-details">
                  <strong>{item.description}</strong>
                  <p className="my-1">{item.name}</p>
                  <strong className="my-2">{item.price}</strong>
                  <Rating name="half-rating-read" value={item.rating} defaultValue={2.5} precision={0.5} readOnly />
                </div>
            </div>
          )) : 
            <div className="border border-danger p-5 m-5">
              <h4 className="text-center">No items in cart</h4>
          </div> 
        }
        </div>
        </div>
        <div class="col-lg-4 rounded">
          <div className="col-12 p-4 mt-5 mt-sm-0 bg-white">
            <p class="payo-txt-2">Address</p>
            <form className="col-12">
              <input class="mb-4 inputone" required placeholder="Address" onChange={(e) => addAddress({ ...address, address: e.target.value })} value={address?.address} />
              <input class="mb-4 inputone" required placeholder="city" onChange={(e) => addAddress({ ...address, city: e.target.value })} value={address?.city} />
              <input class="mb-4 inputone" required placeholder="state" onChange={(e) => addAddress({ ...address, state: e.target.value })} value={address?.state} />
              <input class="mb-4 inputone" required placeholder="Country" onChange={(e) => addAddress({ ...address, country: e.target.value })} value={address?.country} />
            </form>
            <button class="btn payoutbtn" type="button" onClick={setAddress}>Save Address</button>
          </div>
          <div class="col-12 mt-3 p-4 bg-white">
            <p class="payo-txt-2">Sub-Total : {getCartTotal(cart)}</p>
            <button class="btn payoutbtn" type="button" onClick={handleCheckout}>Proceed To payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payout;