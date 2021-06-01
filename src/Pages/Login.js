import React from 'react'
import '../style.css'

function Login() {
  return (
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
          <img className='logo' src="images/logo.png" alt="logo"></img>
          <div className="loginContainer">
          <h3>Sign In</h3>
          <p><strong>Email or mobile phone number</strong></p>
          <input></input>
          <button>Continue</button>
          <p>By continuing, you agree to amazon's <span>Conditions of use</span> and Privacy's Notice.</p>
          <a>Need Help?</a>
        </div>
        <div className="newText">New to Amazon</div>
      <div>
        <button>
          create your Amazon Account
        </button>
      </div>
      </div>
      </div>
    </div>
        );
}

export default Login;
