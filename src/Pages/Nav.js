import React, { useState } from 'react';
import '../styles/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CartModal from '../Component/CartModal';

const Nav = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className="nav-container">
            <div className="logo-container">
                <img src="../images/logo2.png" className="nav-logo" alt="logo" />
            </div>
            <div className="search-container">
                <form className="d-flex">
                    <input className="nav-inputone" type="text" placeholder="search" />
                    <button className="searchbtn text-dark" type="submit"><SearchIcon /></button>
                </form>
            </div>
            <div className="nav-elements">
                <Link to="/login">
                    <div className="w-one">
                        <small>Hello User <br /> <span className="navtxt">Sign In</span></small>
                    </div>
                </Link>
                <Link to="/">
                    <div className="w-one">
                        <small>Returns <br /> <span className="navtxt"> & Orders</span></small>
                    </div>
                </Link>
                <div className="w-one" onClick={() => setShowModal(!showModal)}>
                    <ShoppingCartOutlinedIcon className="cart-icon"/>
                    <span className="cart-count">2</span>
                </div>
            </div>
            <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    )
}

export default Nav
