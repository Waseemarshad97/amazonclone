import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Products from "../Component/Products";
import CarouselCont from '../Component/Carousel';
import { db, storage } from "../firebase.js";

const Home = () => {

  const [product, setProduct] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const promises = [];

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
        db.collection("products").get().then((docs) => {
      docs.forEach((val) => {
        setProduct((prev) => ([...prev, {...val.data(), id: val.id}]))
        const promise = storage
          .ref(val.get('image'))
          .getDownloadURL()
          .catch((error) => {
            console.error(error);
          })
          .then((fileUrl) => {
            return fileUrl;
          });
        promises.push(promise);
      });

      Promise.all(promises)
        .catch((err) => {
          console.error('error', err);
        })
        .then((urls) => {
          urls.map((item) => (
            setImageUrl((prev) => ([...prev, item]))
          ))
        })
    })

  }
  return (
    <div className="home">
      <div className="background-x">
        <CarouselCont />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center products">
          {product.map((item, index) => {
            return (
              <div className="col-md-3 col-sm-12">
                <Products
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  image={imageUrl[index]}
                  id={item.id}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
