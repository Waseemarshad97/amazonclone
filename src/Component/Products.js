import { StylesProvider } from '@material-ui/styles';
import React from 'react';

const Products = ({ name, price, rating, decription, image }) => {
  return (
    <div className="container-product">
        <div>
            <div>
                <p className="p-name">{name}</p>
                <img className="p-img" alt="product-img" src={image} />
                <p>⭐⭐⭐⭐⭐</p>
                <p className="p-pro">${price}</p>
                <p>{decription}</p>
            </div>
        </div>
    </div>
  )
}
export default Products;