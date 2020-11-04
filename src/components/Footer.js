import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="footer-contact">
          <div className="row">
            <div className="col-2">
              <h2>Contact</h2>
            </div>
            <div className="col-2">
              <h3>Email</h3>
              <p>
                <a href="mailto:xavierejackson20@gmail.com">
                  Click Here to Email Me
                </a>
              </p>
            </div>
            <div className="col-2">
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
            <div className="col-2">
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
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
