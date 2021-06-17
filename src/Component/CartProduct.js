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
        <div className="container cart-container">
            <div className="row">
                <div className="col-6 d-flex justify-content-center p-img-container">
                    <img className="img-fluid" alt="product-img" src={image ? image : '../images/product-placeholder.gif'} />
                </div>
                <div className="col-6 mt-1 product-details">
                    <p className="p-name">{name}</p>
                    <Rating name="half-rating-read" value={rating} defaultValue={2.5} precision={0.5} readOnly />
                    <p>{description}</p>
                    <p className="p-name">${price}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn border-sm border-danger mt-2" onClick={removeItem}>Remove Item</button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
