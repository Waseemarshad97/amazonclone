import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/CartModal.css';
import {StateContext} from '../context/StateProvider';

const CartModal = ({show, onHide, }) => {
    const [{cart}, dispatch] = useContext(StateContext);
    console.log(cart);
    return(
        <Modal size="lg" show={show} onHide={onHide} scrollable>
            <Modal.Header closeButton>
                <h3 className="ml-5">My Cart</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="row cart">
                    <div className="col-12">
                        {cart?.map((item) => (
                            <div className="cart-container">
                                <img className="col-3 product-image"
                                    src={item.image}
                                    alt="name"
                                />
                                <div className="col-9 product-details">
                                    <strong>{item.name}</strong>
                                    <p>{item.decription}</p>
                                    <strong>{item.price}</strong>
                                </div>
                                <button className="btn-sm btn-danger mt-2">Remove Item</button>
                            </div>
                        ))}
                    </div>
                    <h6 className="mt-3 ml-5">Subtotal ( {cart?.length} Item ) : <strong>1211121</strong></h6>
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