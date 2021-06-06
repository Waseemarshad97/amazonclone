import React from 'react';
import '../styles/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Nav = () => {
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
                <div className="w-one">
                    <text className="navtxt">Hello User <br /> <span>Sign In</span></text>
                </div>
                <div className="w-one">
                    <text className="navtxt">Returns & <br /> <span>Orders</span></text>
                </div>
                <div className="w-one">
                    <ShoppingCartOutlinedIcon className="cart-icon"/>
                    <span className="cart-count">2</span>
                </div>
            </div>
        </div>
    )
}

export default Nav
