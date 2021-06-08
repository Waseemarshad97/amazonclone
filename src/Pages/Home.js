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

  // useEffect(() => {
  //   console.log(product);
  // }, [product])
  const get_products = () => {
    //   db.collection("products").get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //           // doc.data() is never undefined for query doc snapshots
    //           console.log(doc.id, " => ", doc.data().description);
    //       });
    //   });
    // };
    db.collection("products").get().then((docs) => {
      docs.forEach((doc) => {
        console.log(doc.data());
        // To Get image url from database filename
        const data = {
          name: doc.data()?.name,
          image: '',
          rating: doc.data()?.rating,
          description: doc.data()?.description,
          price: doc.data()?.price,
        }
        storage.ref(doc.get('image')).getDownloadURL()
          .then((url) => {
            data.image = url;
            setProduct((prev) => ([
              ...prev,
              data,
            ]
            ));
          })
          .catch(() => {
            setProduct((prev) => ([
              ...prev,
              data,
            ]))
          })
        console.log(data);
      });
    });
  }
  return (
    <div className="home">
      <div className="background-x">
        <CarouselCont />
      </div>
      <div className="container-fluid">
        <div className="row products">
          {product?.map((item) => (
            <div className="col-md-3 col-sm-12">
              <Products
                name={item.name}
                rating={item.rating}
                price={item.price}
                decription={item.description}
                image={item.image}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;
