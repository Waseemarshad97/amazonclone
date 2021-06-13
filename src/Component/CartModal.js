import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/CartModal.css';
import {StateContext} from '../context/StateProvider';
import CartProduct from './CartProduct';
import {getCartTotal} from '../context/reducer';

const CartModal = ({show, onHide, }) => {
    const [{ cart },] = useContext(StateContext);

    return(
        <Modal size="lg" show={show} onHide={onHide} scrollable>
            <Modal.Header closeButton className="cart-header">
                <h3 className="ml-5">My Cart</h3>
            </Modal.Header>
            <Modal.Body className="cart">
                <div className="row">
                    {cart?.map((item) => (
                    <div className="col-12">
                        <CartProduct image={item.image} name={item.name} price={item.price} description={item.description} rating={item.rating} id={item.id} />
                    </div>
                    ))}
                    <h6 className="mt-3 mx-auto px-5 py-3 bg-warning">Subtotal ( {cart?.length} Item ) : <strong>${' '}{getCartTotal(cart)}</strong></h6>
                    <div className="col-10 mx-auto">
                        <button className="btn loginbtn mb-2">Proceed to Buy</button>
                    </div>
                    <div className="col-10 mx-auto">
                        <button className="btn btn-sm btn-block btn-danger mb-4">Remove All</button>
                    </div>
                </div>
            </Modal.Body>

            </Modal> 
    )
}
export default CartModal;