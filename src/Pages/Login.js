import React from 'react'
import '../index.css';

function Login() {
  return (
    <div className="a-home text-center">
      <div className="a-subContainer ">
        <div className="row ">
          <div className="col-4">
          <img></img>
          <div className="loginContainer">
          <h3>Sign In</h3>
          <p><strong>Email or mobile phone number</strong></p>
          <input></input>
          <button>Continue</button>
          <p>By continuing, you agree to amazon's <span>Conditions of use</span> and Privacy's Notice.</p>


          <a>Need Help?</a>

        </div>
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
