import React, { useState, useContext } from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CartModal from '../Component/CartModal';
import { StateContext } from '../context/StateProvider';
import { auth } from '../firebase';
import { Navbar, InputGroup, Nav } from 'react-bootstrap';
import SmallScreenHeader from './SmallScreenHeader';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [{ user, cart },] = useContext(StateContext);
  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <>
      <div className="container-fluid sticky-top d-none d-md-block">
        <Navbar bg="dark" expand="md" variant="dark" className="row nav-container">
          <div className="w-one">
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
            <>
              <Nav className="nav-elements">
                <Link to={!user && "/login"}>
                  <div className="w-one" onClick={handleSignOut}>
                    <small>Hello {user ? user.displayName : 'User'} <br />
                      <span className="navtxt">{user ? 'Sign Out' : 'Sign In'}</span></small>
                  </div>
                </Link>
                <Link to="/Orders">
                  <div className="w-one">
                    <small>Returns <br /> <span className="navtxt"> & Orders</span></small>
                  </div>
                </Link>
                <div className="w-one" id="shakeIcon" onClick={() => setShowModal(!showModal)}>
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                  <span className="cart-count text-white">{cart.length}</span>
                </div>
              </Nav>
            </>
          </div>
          <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </Navbar>
      </div>
      <SmallScreenHeader />
    </>
  )
}

export default Header;
