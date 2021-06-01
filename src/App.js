import React from 'react'
import './App.css';
import './style.css';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Payout from './Pages/Payout';

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Route path='/' exact component ={Home} />
      <Route path='/Login' component ={Login} />
      <Route path='/Payout' component ={Payout} />
  </Router>

    );
  }

export default App;
