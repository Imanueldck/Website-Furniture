import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";
import image3 from "../images/user3-128x128.jpg";

const Navbar = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Iphone 11 pro", quantity: 2, price: 900 },
    { id: 2, name: "Samsung galaxy Note 10", quantity: 2, price: 900 },
    { id: 3, name: "Canon EOS M50", quantity: 1, price: 1199 },
    { id: 4, name: "MacBook Pro", quantity: 1, price: 1799 },
  ]);

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderItems = () => {
    return items.map((item) => (
      <li key={item.id}>
        <a className="dropdown-item d-flex gap-3" href="#">
          <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img${item.id}.webp`} alt="twbs" width="64" height="64" className="flex-shrink-0" />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">{item.name}</h6>
              <p className="mb-0 opacity-75">
                {item.quantity} x Rp {item.price}
              </p>
              <p className="mb-0 opacity-75">
                <i className="fa fa-calculator"></i> Rp {item.price * item.quantity}
              </p>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider"></hr>
      </li>
    ));
  };
  return (
    <nav className="navbar navbar-expand-xxl navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mebel
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Mebel
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
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
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  {renderItems()}
                  <a className="dropdown-item" href="#">
                    <li>
                      <b>Total</b> : Rp {calculateSubtotal()}
                    </li>
                  </a>

                  <hr className="dropdown-divider"></hr>

                  <li>
                    <Link to="/cart" className="dropdown-item text-center">
                      Keranjang
                    </Link>
                  </li>
                </ul>
                {/* <Link to="/cart" className="nav-link">
                  <span className="brand-text font-weight-light">Cart</span>
                </Link> */}
              </li>
              <li className="nav-item dropdown">
                <Link to="/login" className="nav-link">
                  <span className="brand-text font-weight-light">Login</span>
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
              <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
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
