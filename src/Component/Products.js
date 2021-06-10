import React from 'react';
import '../styles/Product.css';
import { Rating } from '@material-ui/lab'
const Products = ({ name, price, rating, decription, image }) => {
  return (
    <div className="product-container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center p-img-container">
          <img className="p-img" alt="product-img" src={image} />
        </div>
        <div className="col-12 product-details">
          <p className="p-name">{name}</p>
          <Rating name="half-rating-read" value={rating} defaultValue={2.5} precision={0.5} readOnly />
          <p>{decription}</p>
          <p className="p-name">${price}</p>
        </div>
        <div className="col-12 d-flex">
          <button className="btn loginbtn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Products;