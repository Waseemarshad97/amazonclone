import React, { useContext, useState } from 'react';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { StateContext } from '../context/StateProvider';
import SlidingPanel from 'react-sliding-side-panel';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [{ user, cart },] = useContext(StateContext);
    const [confirmModal, setConfirmModal] = useState(false);
    const [openPanel, setOpenPanel] = useState(false);

    const handleShow = () => {
        if (user) {
            setConfirmModal(true);
        }
    }
    return (
            <div className="row d-md-none py-2 px-0">
                <div className="col-12 px-0 d-flex justify-content-between">
                    <MenuOutlinedIcon onClick={() => setOpenPanel(true)} className="text-white bg-dark mt-2 ml-2" />
                    <div className="col py-1 px-2">
                        <Link to="/">
                            <img
                                alt=""
                                src="../images/logo2.png"
                                className="nav-logo mt-2 img-fluid"
                                width="80"
                                height="25"
                            />
                        </Link>
                    </div>
                    <div className="col d-flex mb-2 px-1">
                        <Link to={!user && "/login"} className="pt-2">
                            <div className="text-white" onClick={handleShow}>
                                <small className="navtxt mb-0">{user ? 'Sign Out' : 'Sign In'}</small>
                            </div>
                        </Link>
                        <div className="pl-4" onClick={() => setShowModal(!showModal)}>
                            <ShoppingCartOutlinedIcon className="cart-icon" />
                            <span className="cart-count text-white">{cart.length}</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 pl-0">
                    <form className="ml-3">
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
                <SlidingPanel
                    type="left"
                    isOpen={openPanel}
                    backdropClicked={() => setOpenPanel(false)}
                    size={30}
                    panelClassName="additional-class"
                >
                    <div className="bg-white">
                    <div>My Panel Content</div>
                    </div>
                    <button onClick={() => setOpenPanel(false)}>close</button>
                </SlidingPanel>
            </div>
    )
}
export default Sidebar;