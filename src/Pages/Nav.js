import React, { useState } from 'react';
import '../styles/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Modal, ModalBody } from 'react-bootstrap';

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
            <Modal show={showModal} onHide={() => setShowModal(false)} scrollable>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                        <div className="cart-container">
                            <img className="product-image" src="" alt="name" />
                            <div className="product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            </Modal> 

        </div>
    )
}

export default Nav
