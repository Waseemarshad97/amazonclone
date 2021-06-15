import React, { useState, useContext } from 'react';
import '../styles/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import CartModal from '../Component/CartModal';
import { StateContext } from '../context/StateProvider';
import { auth } from '../firebase';

const Nav = () => {
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
                <Link to={ !user && "/login"}>
                    <div className="w-one" onClick={handleSignOut}>
                        <small>Hello { user ? user.displayName : 'User'} <br />
                        <span className="navtxt">{ user ? 'Sign Out' : 'Sign In'}</span></small>
                    </div>
                </Link>
                <Link to="/">
                    <div className="w-one">
                        <small>Returns <br /> <span className="navtxt"> & Orders</span></small>
                    </div>
                </Link>
                <div className="w-one" onClick={() => setShowModal(!showModal)}>
                    <ShoppingCartOutlinedIcon className="cart-icon"/>
                    <span className="cart-count">{cart.length}</span>
                </div>
            </div>
            <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    )
}

export default Nav
