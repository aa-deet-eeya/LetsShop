import React, { Component } from "react";
import Image1 from "../assets/Image1.png";
import Login from "./Login";
import Register from "./Register";
import "../css/Content.css";

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  onClickHandlerLogin = () => {
    this.setState({ isLogin: true });
  };
  onClickHandlerRegister = () => {
    this.setState({ isLogin: false });
  };
  render() {
    const activeCard = this.state.isLogin ? <Login /> : <Register />;
    const Loginclasses = this.state.isLogin ? "content-register my-2 my-sm-0 cardButton activeBtn" : "content-register my-2 my-sm-0 cardButton";
    const RegisterClasses = !this.state.isLogin ? "content-register my-2 my-sm-0 cardButton activeBtn" : "content-register my-2 my-sm-0 cardButton";
    return (
      <div className="container-fluid conatiner-wrapper">
        <div className="cardButtons">
          <button
            className={Loginclasses}
            onClick={this.onClickHandlerLogin}
          >
            {" "}
            Log In{" "}
          </button>
          <button
            className={RegisterClasses}
            onClick={this.onClickHandlerRegister}
          >
            Register
          </button>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="container-fluid d-none d-lg-block col">
            <img className="image1" src={Image1} alt="Image1" />
          </div>
          <div className="container-fluid d-flex justify-content-center col">
            {activeCard}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
