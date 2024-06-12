import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import image3 from "../images/user3-128x128.jpg";
import logo from "../images/logo.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch cart data
    axios
      .get("https://fakestoreapi.com/carts/user/4")
      .then((response) => {
        if (response.data.length > 0) {
          setCart(response.data[0]);
        }
      })
      .catch((error) => console.error("Error fetching cart:", error));

    // Fetch products data
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (cart && products.length > 0) {
      const items = cart.products
        .map((cartItem) => {
          const product = products.find((p) => p.id === cartItem.productId);
          if (product) {
            return {
              ...cartItem,
              title: product.title,
              price: product.price,
              image: product.image,
            };
          }
          return null;
        })
        .filter((item) => item !== null);
      setCartItems(items);
    }
  }, [cart, products]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const renderItems = () => {
    if (cartItems.length === 0) {
      return (
        <a className="dropdown-item" href="#">
          <li>
            <b>No cart</b>
          </li>
        </a>
      );
    }
    return (
      <>
        {cartItems.map((item) => (
          <li key={item.productId}>
            <Link to={`/product/${item.productId}`} className="dropdown-item d-flex gap-3">
              <img src={item.image} alt={item.title} width="64" height="64" className="flex-shrink-0" />
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">{item.title}</h6>
                  <p className="mb-0 opacity-75">
                    {item.quantity} x Rp {item.price}
                  </p>
                  <p className="mb-0 opacity-75">
                    <i className="fa fa-calculator"></i> Rp {item.price * item.quantity}
                  </p>
                </div>
              </div>
            </Link>
            <hr className="dropdown-divider"></hr>
          </li>
        ))}
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
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Mebelin
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Mebel
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <form className="d-flex mt-3 mt-lg-0 mx-auto search-form position-relative" role="search">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <input type="text" className="form-control" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
                </div>
                {searchResults.length > 0 && (
                  <ul className="dropdown-menu show search-dropdown position-absolute">
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <Link to={`/product/${result.id}`} className="dropdown-item">
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
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <ul className="dropdown-menu dropdown-menu-lg-end">{renderItems()}</ul>
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
  );
};

export default Navbar;
