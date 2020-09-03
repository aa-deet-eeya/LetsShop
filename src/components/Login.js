import React, { Component } from "react";
import Email from '../assets/image2.png';
import Password from '../assets/image3.png';
import '../css/Login.css'

export class Login extends Component {
  render() {
    return (
      <>
        <div className="card loginCard">
          <div className="card-body">
            <h1 className="card-title">Member Login</h1>
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span>
                    <img className="form-image" src={Email} alt=""/>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control inp"
                  placeholder="Registered Email ID"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span>
                  <img className="form-image" src={Password} alt=""/>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control inp"
                  placeholder="Password"
                />
              </div>
              <button className="Login login-btn" onClick={(e)=>{e.preventDefault()}}>
                Login
              </button>
              <div className="d-flex justify-content-between">
                <div className="rememeber-me">
                  <input type="checkbox" className="checkbox"/> Remember ME
                </div>
                <div className="forget-link">
                  <a href="/#">Forgot your password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
