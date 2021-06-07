import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Payout from './Pages/Payout';
import Signup from './Pages/Signup';
import Nav from './Pages/Nav';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Nav />
          <Home />
        </Route>
        <Route path='/login' component ={Login} />
        <Route path='/payout' component ={Payout} />
        <Route path='/signup' component={Signup} />
      </Switch>
  </Router>

    );
  }

export default App;
