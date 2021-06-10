import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/CartModal.css';
import {StateContext} from '../context/StateProvider';

const CartModal = ({show, onHide, }) => {
    const [cart, dispatch] = useContext(StateContext);
    console.log(cart);
    return(
        <Modal size="lg" show={show} onHide={onHide} scrollable>
            <Modal.Body>
                <div className="row cart">
                    <div className="col-12">
                        <h3 className="text-center mb-3 border-bottom">Shopping Cart</h3>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                    </div>
                    <h6 className="mt-3 ml-5">Subtotal ( 3 Item ) : <strong>1211121</strong></h6>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button className="btn loginbtn mb-2">Proceed to Buy</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-sm btn-block btn-danger mb-4">Remove All</button>
                    </div>
                </div>
            </Modal.Body>

            </Modal> 
    )
}
export default CartModal;