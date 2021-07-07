import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Payout from './Pages/Payout';
import Signup from './Pages/Signup';
import Header from './Pages/Header';
import { StateContext } from './context/StateProvider';
import Orders from './Pages/Orders';
import { auth, db, storage } from './firebase';
const App = () => {

  const [, dispatch] = useContext(StateContext)
  const [product, setProduct] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const promises = [];

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        localStorage.removeItem('authUser', JSON.stringify(authUser))
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'SET_PRODUCTS',
      item: product,
      images: imageUrl,
    })
  }, [product, imageUrl, dispatch])

  useEffect(() => {
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
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <Home />
        </Route>
        <Route path='/login' component ={Login} />
        <Route path='/payout'>
          <Header />
          <Payout />
        </Route>
        <Route path='/signup' component={Signup} />
        <Route path='/orders'>
          <Header />
          <Orders />
        </Route>
      </Switch>
  </Router>

    );
  }

export default App;
