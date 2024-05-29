import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import image3 from "../images/user3-128x128.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mebel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Mebel
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-products">
                  Produk
                </a>
              </li>
              <li class="nav-item dropdown">
                <Link to="/login" className="nav-link">
                  <span class="brand-text font-weight-light">Login</span>
                  <img
                    src={image3}
                    alt=""
                    className="brand-image img-circle elevation-3"
                    styles={{
                      opacity: 0.8,
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </li>
            </ul>
            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
