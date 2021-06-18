import React, { useState, useContext, useEffect } from 'react'
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/StateProvider';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [, dispatch] = useContext(StateContext);
  const [error, setError] = useState();

  const handleSiginin = (e) => {
    e.preventDefault()
      //  code from firebase
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        dispatch({
          type: 'SET_USER',
          user: user,
        })
        localStorage.setItem('authUser', JSON.stringify(user))
        history.push('/')
      })
      .catch((error) => {
        setError(error.message);
      });
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
            <div className="loginContainer">
              <form>
                <h3 className="Fontone">Sign-In</h3>
                <p className="fontthree">Email or mobile phone number</p>
                <input className="inputone mb-3" type="tel" onChange={(e) => setEmail(e.target.value)} value={email} />
                <p className="forgot fontthree">Password <span><a href="/">Forgot password?</a></span></p>
                <input type="password" className="inputone mb-3" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button className="btn loginbtn" type="submit" onClick={handleSiginin}>Continue</button>
                <p className="mt-3 txttwo">By continuing, you agree to amazon clone's <a className="txttwo" href="/">Conditions of Use</a> and  <a className="txttwo" href="/">Privacy's Notice.</a></p>
                <a className="txttwo" href="/">Need Help?</a>
              </form>
            </div>

            <div className="row mt-4">
              <div className="col L-line"></div>
              <div className="col-auto"><p className="txtfour">New to Amazon?</p></div>
              <div className="col R-line"></div>
            </div>
            <div>
              <Link to="/signup">
                <button className="btn btntwo" type="button">Create your Amazon Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center footer mt-4">
        <div className="col-3 mt-4">
          <div className="footerLinks">
            <a href="/">Conditions of Use</a>
            <a href="/">Privacy Notice</a>
            <a href="/">Help</a>
          </div>
          <p className="text-center mt-2">© 2021, AmazonClone.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
