import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
     
          <nav className="navbar navbar-expand-lg navbar-dark bg-grey">
            <a href="/" className="navbar-brand header">
              <h1 className="title">JustisCode</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active" href="/">
                  <span className="sr-only">(current)</span>
                </a>

                <a className="nav-link" href="/portfolio">
                  <h6>Portfolio</h6>
                </a>
                <a className="nav-link" href="/about">
                  <h6>About</h6>
                </a>
                <a className="nav-link" href="/contact">
                  <h6>Contact</h6>
                </a>
              </div>
            </div>
          </nav>
        </div>
  );
}

export default Header;
