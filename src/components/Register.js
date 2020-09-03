import React, { Component } from "react";
import "../css/Register.css";

export class Register extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="First Name*"
              />
            </div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Country*"
              />
            </div>
            <div className="w-100"></div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Last Name*"
              />
            </div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Contact Number*"
              />
            </div>
            <div className="w-100"></div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Are you a Buyer or Supplier?*"
              />
            </div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Email Address*"
              />
            </div>
            <div className="w-100"></div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Company Name*"
              />
            </div>
            <div className="col input-group">
              <div className="input-group-prepend">
                <span className="">
                  <div className="color"></div>
                </span>
              </div>
              <input
                type="text"
                className="form-control inp-text1"
                placeholder="Choose Password*"
              />
            </div>
          </div>
          <button
            className="register-btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
