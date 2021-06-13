import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import { Rating } from '@material-ui/lab';
import '../styles/CartProduct.css';

const CartProduct = ({ name, price, image, rating, description, id }) => {
    const [, dispatch] = useContext(StateContext);
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="col-12 cart-container">
            <div className="row">
                <img className="col-6 cart-img"
                    src={image}
                    alt="name"
                />
                <div className="col-6 cart-details">
                    <strong>{name}</strong>
                    <p className="my-1">{description}</p>
                    <strong className="my-2">${' '}{price}</strong>
                    <Rating name="half-rating-read" value={rating} defaultValue={2.5} precision={0.5} readOnly />

                </div>
                <div className="col-12">
                    <button className="btn mt-2 remove" onClick={removeItem}>REMOVE ITEM</button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
