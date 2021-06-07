import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Products from "../Component/Products";
import CarouselCont from '../Component/Carousel';
import { db, storage } from "../firebase.js";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    get_products();
  }, []);

  const get_products = () => {
    db.collection('products')
      .doc().map((item) => (
      item.onSnapshot((snapshot) => (
        console.log(snapshot.data())
      ))
      ))
      };
    // db.collection("products").get().then((docs) => {
    //     docs.forEach((doc) => {
    //         console.log(doc);
    //         // To Get image url from database filename
    //         storage.ref(doc.get('image')).getDownloadURL()
    //         .then((url) => {
    //           setProduct((prev) => ([
    //             ...prev,
    //             {
    //               name: doc.name,
    //               image: url,
    //               rating: doc.rating,
    //               decription: doc.description,
    //               price: doc.price
    //             }
    //           ]
    //             ));
    //         })
    //     });
    // });
  
  return (
    <div>
      <div className="background-x">
        <CarouselCont />
      </div>
      <div className="mainContainer">

        <div className="row">
          {product?.map((item) => {
            <div className="col-3">
              <Products
                name={item.name}
                rating={item.rating}
                price={item.price}
                decription={item.description}
                image={item.image}
              />
            </div>
          })}

        </div>
      </div>
    </div>
  );
}

export default Home;
