// Import useState dan useEffect dari React
import React, { useState, useEffect } from "react";
// Import Link dari react-router-dom
import { Link } from "react-router-dom";
// Import FontAwesomeIcon dari @fortawesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import ikon faCartShopping dan faMagnifyingGlass dari @fortawesome/free-solid-svg-icons
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// Import useCart dari CartContext
import { useCart } from "../components/CartContext";
// Import gambar image3 dan logo
import image3 from "../images/user3-128x128.jpg";
import logo from "../images/logo.png";
// Import CSS untuk Navbar
import "../css/Navbar.css";

// Komponen Navbar
const Navbar = () => {
  // Gunakan useCart untuk mengakses data keranjang belanja
  const { cartItems, calculateSubtotal } = useCart();
  // Deklarasikan state untuk pencarian dan hasil pencarian
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fungsi untuk menghandle perubahan input pencarian
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Lakukan pencarian
  };

  // Fungsi untuk merender item keranjang belanja
  const renderItems = () => {
    // Jika tidak ada item dalam keranjang
    if (!cartItems || cartItems.length === 0) {
      return (
        <li className="dropdown-item">
          <b>No items in cart</b>
        </li>
      );
    }

    // Jika ada item dalam keranjang
    return (
      <>
        {cartItems.map((item) => (
          <li key={item.productId} className="dropdown-item">
            <img
              src={item.image}
              alt={item.title}
              width="64"
              height="64"
              className="flex-shrink-0"
            />
            <div className="d-flex flex-column justify-content-between ms-3">
              <h6>{item.title}</h6>
              <p>
                {item.quantity} x Rp {item.price}
              </p>
            </div>
          </li>
        ))}
        <li className="dropdown-item">
          <b>Total</b>: Rp {calculateSubtotal()}
        </li>
        <li className="dropdown-divider"></li>
        <li>
          <Link to="/cart" className="dropdown-item">
            View Cart
          </Link>
        </li>
      </>
    );
  };

  // Return navbar
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Mebelin Furniture Logo"
              style={{
                width: "75px",
                height: "auto",
              }}
            />
          </Link>
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
            className="offcanvas offcanvas-end text-bg-dark"
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
              <div className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <form
                  className="d-flex mt-3 mt-lg-0 mx-auto search-form position-relative"
                  role="search"
                >
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  {searchResults.length > 0 && (
                    <ul className="dropdown-menu show search-dropdown position-absolute">
                      {searchResults.map((result) => (
                        <li key={result.id}>
                          <Link
                            to={`/product/${result.id}`}
                            className="dropdown-item"
                          >
                            {result.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </form>
              </div>
              <ul className="navbar-nav d-flex justify-content-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    {renderItems()}
                  </ul>
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
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-submenu container-navbar mt-5 custom-navbar-submenu">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item custom-submenu-item">
            <Link to="/about" className="nav-link custom-submenu-link">
              About Us
            </Link>
          </li>
          <li className="nav-item custom-submenu-item">
            <Link to="/products" className="nav-link custom-submenu-link">
              Produk
            </Link>
          </li>
          <li className="nav-item custom-submenu-item">
            <Link to="/faq" className="nav-link custom-submenu-link">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
