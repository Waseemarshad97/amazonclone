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
            {/* <Modal.Header>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div className="row cart">
                    <div className="col-12">
                        <h3 className="text-center mb-3 border-bottom">Shopping Cart</h3>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                        <div className="cart-container">
                            <img className="col-3 product-image"
                                src="https://firebasestorage.googleapis.com/v0/b/reactworkshop-dfd9c.appspot.com/o/images%2F71ZOtNdaZCL._AC_SL1500_.jpg?alt=media&token=8ba01665-325b-4e1d-8daf-e7cc9e39c48a"
                                alt="name"
                            />
                            <div className="col-9 product-details">
                                <strong>Name</strong>
                                <p>details of the products get displayed here</p>
                                <strong>Price</strong>
                            </div>
                            <button className="btn-sm btn-danger mt-2">Remove Item</button>
                        </div>
                    </div>
                    <h6 className="mt-3 ml-5">Subtotal ( 3 Item ) : <strong>1211121</strong></h6>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button className="btn loginbtn mb-2">Proceed to Buy</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-sm btn-block btn-danger mb-4">Remove All</button>
                    </div>
                </div>
            </Modal.Body>

            </Modal> 

        </div>
    )
}

export default Nav
