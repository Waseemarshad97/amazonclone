import React, { useEffect, useContext } from 'react';
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
import { auth } from './firebase';
const App = () => {

  const [, dispatch] = useContext(StateContext)

  const loggedUser = JSON.parse(localStorage.getItem('authUser'))

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
