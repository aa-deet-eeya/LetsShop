import React, { Component } from "react";
import Logo from "../assets/logo.png"
import "../css/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/#">
            <img className="logo" src={Logo} alt="logo" />
          </a>
          <div className="logo-text"> 
            <h6>PretVA</h6>
            <p className="logo-subtext">Making Fashion Easy</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto link-list">
              <li className="nav-item active list-item">
                <a className="nav-link" href="/#">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active list-item">
                <a className="nav-link" href="/#">
                  Services <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active list-item">
                <a className="nav-link" href="/#">
                  Search <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active list-item">
                <a className="nav-link" href="/#">
                  Feedback & Support <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <button className="my-2 my-sm-0 navbar-login-button">
                Login
              </button>
              <button className="my-2 my-sm-0 navbar-register-button">
                Register
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
