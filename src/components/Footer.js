import React, { Component } from "react";
import "../css/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer className="page-footer blue pt-4">
          <div className="footer-primary container">
            <div className="row d-flex justify-content-between">
              <div className="col-md-0 mt-md-0 mt-0">
                <h5 className="text-uppercase footer-header">Get In Touch</h5>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-2 mb-md-0 mb-3 text-left">
                <h6 className="footer-location">Location</h6>
                <p className="footer-location">Bengaluru, Karnataka, India</p>
              </div>
              <div className="col-md-2 mb-md-0 mb-3 text-left">
                <h6 className="contact-footer">Contact</h6>
                <p className="contact-footer">support@pretva.com</p>
              </div>
              <div className="col-md-2 mb-md-0 mb-3 text-left">
                <h6 className="footer-location">Follow</h6>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-md-left py-3">
            <div className="container copright">© 2020 by Pret VA</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
