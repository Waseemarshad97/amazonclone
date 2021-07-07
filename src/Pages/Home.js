import React, { useState, useEffect, useContext } from 'react';
import '../styles/Home.css';
import Products from "../Component/Products";
import CarouselCont from '../Component/Carousel';
import { StateContext } from '../context/StateProvider';

const Home = () => {

  const [product, setProduct] = useState([]);
  const [ { products, images },] = useContext(StateContext);

  useEffect(() => {
    setProduct(products)
  }, [products]);

  return (
    <div className="home">
      <div className="background-x">
        <CarouselCont />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center products">
          {product.length ? product.map((item, index) => {
            return (
              <div className="col-12 col-md-4 col-lg-3">
                <Products
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  image={images[index]}
                  id={item.id}
                />
              </div>
            )
          }):
              <div className="col-10 col-md-6 d-flex bg-white flex-column text-center mx-auto mt-5 py-5 border border-danger border">
                <h5 className="text-danger mt-5">Oops !!! No Products Available</h5>
            </div>
            }
        </div>
      </div>
    </div>
  );
}

export default Home;
