import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/CartModal.css';
import {StateContext} from '../context/StateProvider';
import CartProduct from './CartProduct';
import {getCartTotal} from '../context/reducer';
import { Link, useHistory } from 'react-router-dom';
 
const CartModal = ({show, onHide, }) => {
    const [{ user, cart}, dispatch] = useContext(StateContext);
    const history = useHistory();
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }
    const handleCheckout = () => {
        if (!user) {
            history.push('/login');
        } else {
            onHide();
            history.push('/Payout');
        }
    }
    return(
        <Modal size="lg" show={show} onHide={onHide} scrollable>
            <Modal.Header closeButton className="cart-header">
                <h3 className="ml-5">My Cart</h3>
            </Modal.Header>
            <Modal.Body className="container-fluid cart">
                <div className="row">
                    {cart?.map((item) => (
                    <div className="col-12">
                        <CartProduct image={item.image} name={item.name} price={item.price} description={item.description} rating={item.rating} id={item.id} />
                    </div>
                    ))}
                </div>
                {cart.length > 0 ? (
                <div className="row">
                    <div className="col-12 mx-auto">
                        <h6 className="text-center my-3 px-3 py-4 bg-light">Cart Subtotal ( {cart?.length} Item ) : <strong className="ml-1">${' '}{getCartTotal(cart)}</strong></h6>
                        <button className="btn btn-sm btn-block btn-warning mb-3" onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                    <div className="col-12 mx-auto">
                        <button className="btn btn-sm btn-block btn-danger mb-3" onClick={clearCart}>Remove All</button>
                    </div>
                </div>
                    ): (
                    <div className="col-12 p-5 text-center">
                        <h3 className="mb-5">Your Amazon Cart is Empty</h3>
                        <Link to="/" onClick={onHide}>Add Now</Link>
                    </div>
                )}
            </Modal.Body>

            </Modal> 
    )
}
export default CartModal;