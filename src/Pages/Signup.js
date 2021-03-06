import React, {useState, useContext} from 'react'
import '../styles/Login.css'
import { auth } from "../firebase"
import { useHistory, Link } from 'react-router-dom';
import { StateContext } from '../context/StateProvider';

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [name, setName] = useState();
    const [error, setError] = useState();
    const history = useHistory();
    const [, dispatch] = useContext(StateContext);

    const handleSignup = (e) => {
        e.preventDefault()
        if (password !== password2) {
            alert("Password Do not mactch");
        } else {
            auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({displayName: name }).then(() => {
                    const updatedUser = auth.currentUser;
                    dispatch({
                        type: 'SET_USER',
                        user: updatedUser,
                    })
                    history.push("/");
                    })
            })
            .catch((error) => {
                setError(error.message);
            });
        }
    }

    return (
        <div className="container login">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5">
                    <div className="text-center">
                        <Link to="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="logo" alt="logo" />
                        </Link>
                    </div>

                    {error && (<div className="border border-danger error-message">
                        <strong className="text-danger">{error}</strong>
                    </div>
                    )}
                    <div className="baseContainer">
                        <form onSubmit={handleSignup}>
                            <div className="loginContainer">
                                <h3 className="Fontone mt-2">Create Account</h3>
                                <p className="fontfour">Enter your Name</p>
                                <input className="inputone mb-3" placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} required />
                                <p className="fontfour">Enter Email</p>
                                <input className="inputone mb-3" placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                                <p className="fontfour">Enter password</p>
                                <input className="inputone mb-3" minLength={6} placeholder="password" onChange={(e) => setPassword(e.target.value)} type="password" required />
                                <p className="fontfour">Re-enter password</p>
                                <input className="inputone mb-3" minLength={6} placeholder="password" onChange={(e) => setPassword2(e.target.value)} type="password" required />
                                <button className="btn loginbtn" type="submit" >Sign Up</button>

                                <p className="mt-3 txttwo">By continuing, you agree to amazon clone's <Link className="txttwo" to="/">Conditions of Use</Link> and  <Link className="txttwo" to="/">Privacy's Notice.</Link></p>
                                <Link className="txttwo" to="/">Need Help?</Link>


                                <p className="mt-3 txttwo">Already have an Account ? <Link className="txttwo m-1" to="/Login">Sign In</Link></p>

                            </div>

                        </form>



                    </div>
                </div>
            </div>


            <div className="row justify-content-center footer mt-4">
                <div className="col-3 mt-4">
                    <div className="footerLinks">
                        <Link to="/" className="px-2">Conditions of Use</Link>
                        <Link to="/" className="px-2">Privacy Notice</Link>
                        <Link to="/" className="px-2">Help</Link>
                    </div>
                    <p className="text-center mt-2">?? 2021, AmazonClone.com, Inc. or its affiliates</p>
                </div>
            </div>

        </div>
    );
}



export default Signup
