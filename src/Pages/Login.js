import React, { useState } from 'react'
import '../styles/Login.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleAccountCheck = (e) => {
    e.preventDefault()
    console.log(email);
    setShow(true);
  };

  const handleSiginin = (e) => {
    e.preventDefault()
    console.log(password);
  }

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email);
    history.push('/signup')
  };

  return (
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <Link to="/"><img src="/logo192.png" className="logo" alt="logo" /></Link>
          {!show ?
            (
            <div>
              <div className="loginContainer">
                <h3>Sign In</h3>
                <p><strong>Email or mobile phone number</strong></p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <button type="submit" onClick={handleAccountCheck}>Continue</button>
                <p>By continuing, you agree to amazon's <a href="/">Conditions of use</a> and  <a href="/">Privacy's Notice.</a></p>
                <a href="/">Need Help?</a>
              </div>
              <div className="newText">New to Amazon?</div>
              <div>
                <button type="submit" onClick={handleSignup}>
                  create your Amazon Account
                </button>
              </div>
            </div>) :(
              <div className="loginContainer">
                <h3>Sign In</h3>
                <p><strong>Password</strong> <span><a href="/">Forgot password?</a></span></p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button type="submit" onClick={handleSiginin}>Continue</button>
                <div>
                <input type="checkbox" />
                <span>Keep me signed in. <a href="/">Details</a></span>
                </div>
              </div>

            )}
        </div>
      </div>
    </div>
  );
}

export default Login;
