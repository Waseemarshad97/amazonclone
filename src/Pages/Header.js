import React, { useState, useContext } from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CartModal from '../Component/CartModal';
import { StateContext } from '../context/StateProvider';
import { auth } from '../firebase';
import { Navbar, Form, InputGroup, FormControl, Button, Nav } from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [{ cart, user }, dispatch] = useContext(StateContext);
    const handleSignOut = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: 'SET_USER',
                user: null,
            }) 
        }
    }
    return (
      <div className="container-fluid">
        <Navbar bg="dark" expand="md" variant="dark" className="row nav-container">
          <Navbar.Toggle aria-controls="amazon-nav" />
          <div  className="w-one">
            <Link to="/">
              <img
                alt=""
                src="../images/logo2.png"
                className="nav-logo mt-2"
                width="100"
                height="30"
              />
            </Link>
          </div>
          <div className="d-md-none d-flex mb-2">
            <Link to={!user && "/login"} className="pt-2">
              <div className="text-white" onClick={handleSignOut}>
                <small className="navtxt mb-0">{user ? 'Sign Out' : 'Sign In'}</small>
              </div>
            </Link>
            <div className="w-one" onClick={() => setShowModal(!showModal)}>
              <ShoppingCartOutlinedIcon className="cart-icon" />
              <span className="cart-count text-white">{cart.length}</span>
            </div>
          </div>
          <div className="d-flex flex-grow-1 ">
            <form className="col-12 ml-3">
              <InputGroup>
                <input type="text"
                  placeholder="Search"
                  className="nav-inputone"
                />
                <InputGroup.Prepend>
                  <button className="searchbtn text-dark" type="submit"><SearchIcon /></button>
                </InputGroup.Prepend>
              </InputGroup>
            </form>
          </div>
          <div className="d-flex flex-grow-0 ml-2">
            <Navbar.Collapse id="amazon-nav">
              <Nav className="nav-elements">
                <Link to={!user && "/login"}>
                  <div className="w-one" onClick={handleSignOut}>
                    <small>Hello {user ? user.displayName : 'User'} <br />
                      <span className="navtxt">{user ? 'Sign Out' : 'Sign In'}</span></small>
                  </div>
                </Link>
                <Link to="/Payout">
                  <div className="w-one">
                    <small>Returns <br /> <span className="navtxt"> & Orders</span></small>
                  </div>
                </Link>
                <div className="w-one" onClick={() => setShowModal(!showModal)}>
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                  <span className="cart-count text-white">{cart.length}</span>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
          <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </Navbar>
      </div>
      
    )
}

export default Header;
