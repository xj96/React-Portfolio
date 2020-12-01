import React from "react";
import "/Users/xavierjackson/Desktop/Homework/React Portfolio/reactportfolio/src/components/NavTabs.css"

function NavTabs(props) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={
            props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
