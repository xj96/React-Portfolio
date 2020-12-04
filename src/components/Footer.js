import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <div>
      <div className="container-flex">
        <footer className="footer-contact">
          <div className="row">
            <div className="col-sm-6">
              <h2>Contact Information</h2>
            </div>
            <br/>
            <div className="col-sm-2 contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:xavierejackson20@gmail.com">
                  Click Here to Email Me
                </a>
              </p>
            </div>
            <br/>
            <div className="col-sm-2 contact-item">
              <h3>LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/xavier-jackson/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Click Here for my LinkedIn
                </a>
              </p>
            </div>
            <br/>
            <div className="col-sm-2 contact-item">
              <h3>GitHub</h3>
              <p>
                <a
                  href="https://github.com/xj96"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Click Here for my GitHub
                </a>
              </p>
            </div>
            <div className="col-sm-2 contact-item">
              <h3>Phone</h3>
              <p>(917) 353 - 8546</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
