import React, {useContext} from 'react';
import '../styles/Product.css';
import { Rating } from '@material-ui/lab';
import {StateContext} from '../context/StateProvider';

const Products = ({ name, price, rating, description, image, id }) => {

  const [,dispatch] = useContext(StateContext)

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        name:name,
        image:image,
        rating:rating,
        price:price,
        description:description,
        id:id,
      }
    });
  }

  return (
    <div className="container product-container">
      <div className="row mb-5">
        <div className="col-6 col-md-12 d-flex justify-content-center p-img-container">
          <img className="img-fluid" alt="product-img" src={image ? image : '../images/product-placeholder.gif'} />
        </div>
        <div className="col-6 col-md-12 mt-1 product-details">
          <p className="p-name">{name}</p>
          <Rating name="half-rating-read" value={rating} defaultValue={2.5} precision={0.5} readOnly />
          <p>{description}</p>
          <p className="p-name">${price}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex">
          <button className="btn loginbtn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Products;