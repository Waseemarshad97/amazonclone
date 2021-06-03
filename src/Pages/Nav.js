import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="../images/logo2.png" className="logo" alt="logo" />
            </div>
            <div className="search-container">
                <form className="d-flex">
                    <input className="inputone" type="text" placeholder="search" />
                    
                    <button className="searchbtn" type="submit"><i className="searchicon fa da-search"></i></button>

                </form>
            </div>

            <div className="d-flex">
                <div className="w-one">
                    <text className="navtxt">Hello User</text>
                </div>
                <div className="w-one">
                <text className="navtxt">orders</text>
                </div>
                <div className="w-one">
                <i className="navtxt" class="fa fa-shopping-cart"></i>
                </div>
            </div>


        </div>
    )
}

export default Nav
