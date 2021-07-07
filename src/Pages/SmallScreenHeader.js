import React, { useContext, useState } from "react";
import { Navbar, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { StateContext } from "../context/StateProvider";
import { auth } from "../firebase";
import SearchIcon from '@material-ui/icons/Search';
import CartModal from '../Component/CartModal';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const SmallScreenHeader = () => {

    const [openPanel, setOpenPanel] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchText, setSearchText] = useState();
    const [{ user, cart, originalProducts },dispatch] = useContext(StateContext);
    const handleSignOut = () => {
        setOpenPanel(false);
        if (user) {
            auth.signOut();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = originalProducts.filter((item) => (item?.name?.toUpperCase().includes(searchText.toUpperCase())))
        console.log(filtered)
        dispatch({
          type: 'FILTER',
          item: filtered,
        })
      }
    return (
        <div className="d-md-none container-fluid sticky-top">
            <Navbar bg="dark" expand="md" variant="dark" className="row px-0 nav-container">
                <div className="col-12 m-0 p-0 d-flex justify-content-between">
                    <div className="d-flex pl-2">
                        <MenuIcon className="bg-dark mt-2 text-white"
                            onClick={() => {
                                setOpenPanel(true);
                            }}
                        />
                        <div className="w-one">
                            <Link to="/">
                                <img
                                    alt=""
                                    src="../images/logo2.png"
                                    className="nav-logo ml-2 mt-2"
                                    width="70"
                                    height="30"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Link to={!user && "/login"} className="pt-2">
                            <div className="text-white mt-1" onClick={handleSignOut}>
                                <small className="navtxt mb-0">{user ? 'Sign Out' : 'Sign In'}</small>
                            </div>
                        </Link>
                        <div className="w-one ml-1" id="shakeIcon" onClick={() => setShowModal(!showModal)}>
                            <ShoppingCartOutlinedIcon className="cart-icon" />
                            <span className="cart-count text-white">{cart.length}</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-grow-1 ">
                        <form className="col-12 mt-1" onSubmit={handleSubmit}>
                            <InputGroup>
                                <input type="text"
                                    placeholder="Search"
                                    className="nav-inputone"
                                    value={searchText}
                                    onChange={(e) => {
                                      if (e.target.value.length){
                                        setSearchText(e.target.value)
                                      } else {
                                        setSearchText(e.target.value)
                                        dispatch({
                                          type: 'FILTER',
                                          item: originalProducts,
                                        })
                                      }
                                     }
                                    }
                                />
                                <InputGroup.Prepend>
                                    <button className="searchbtn text-dark" type="submit"><SearchIcon /></button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            </Navbar>
            <SlidingPanel
                type="left"
                isOpen={openPanel}
                backdropClicked={() => setOpenPanel(false)}
                size="80"
            >
                <div className="panel-container bg-white text-dark h-100 p-2">
                    <div className="row">
                        <div className="col-12 d-flex flex-column">
                            <Link to={!user && "/login"} className="border-bottom mt-2">
                                <div className="d-flex mt-1">
                                    <PermIdentityOutlinedIcon className="text-dark icon-size" />
                                    <h6 className="text-dark darker mt-0 ml-2">Hello {user ? user.displayName : 'Sign In'}</h6> <br />
                                </div>
                            </Link>
                            <Link to="/" onClick={()=> setOpenPanel(false)} className="pl-2 mt-3">
                                <div>
                                    <p className="text-dark">Home</p>
                                </div>
                            </Link>
                            <Link to="/" onClick={()=> setOpenPanel(false)} className="pl-2 mt-3">
                                <div>
                                    <p className="text-dark">Account</p>
                                </div>
                            </Link>
                            <Link to="/orders" onClick={()=> setOpenPanel(false)} className="pl-2 mt-3">
                                <div>
                                    <p className="text-dark">Orders</p>
                                </div>
                            </Link>
                            <Link to="/" onClick={()=> setOpenPanel(false)} className="pl-2 mt-3">
                                <div>
                                    <p className="text-dark">Buy Again</p>
                                </div>
                            </Link>
                            <Link to={!user && "/login"} onClick={handleSignOut} className="pl-2 mt-3">
                                <div>
                                    <p className="text-dark">{user? 'Sign Out': 'Sign In'}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <CloseIcon className="close-button" onClick={() => setOpenPanel(false)} />
                </div>
            </SlidingPanel>
            <CartModal show={showModal} onHide={() => setShowModal(false)} />
        </div>
    )
}

export default SmallScreenHeader
