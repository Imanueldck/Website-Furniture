import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Carousel, Row, Col, Button, Container, Form } from "react-bootstrap";
import "../css/Cart.css";

const Cart = () => {
  const TAX_RATE = 0.01;

  // State untuk menyimpan produk yang tersedia dan keranjang belanja
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // State untuk menyimpan informasi pengiriman
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  useEffect(() => {
    // Mengambil data produk dari Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Fungsi untuk menambah produk ke keranjang
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Fungsi untuk menambah jumlah barang
  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) }; // Hindari jumlah negatif
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Fungsi untuk menghapus item dari keranjang belanja
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // Menghitung total harga barang
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Menghitung pajak
  const calculateTax = () => {
    return calculateSubtotal() * TAX_RATE;
  };

  // Handle perubahan pada input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Handle saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan informasi pengiriman seperti menyimpan atau mengirim ke server
    console.log("Shipping info:", shippingInfo);
  };

  // Fungsi untuk merender setiap item di keranjang belanja
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="card-cart mb-3">
        <div className="card-cart">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
              </div>
              <div className="ms-3">
                <h5>{item.title}</h5>
                <p className="small mb-0">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <h5 className="fw-normal mb-0">
                  <button onClick={() => decreaseQuantity(item.id)} className="btn btn-danger btn-sm">
                    -
                  </button>
                </h5>
              </div>
              <div style={{ width: "50px" }}>
                <h5 className="fw-normal mb-0">
                  <button onClick={() => increaseQuantity(item.id)} className="btn btn-primary btn-sm">
                    +
                  </button>
                </h5>
              </div>
              <div style={{ width: "80px" }}>
                <h5 className="mb-0">${(item.price * item.quantity).toFixed(2)}</h5>
              </div>
              <a href="#!" style={{ color: "#cecece" }} onClick={() => removeItem(item.id)}>
                <i className="fas fa-trash-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Fungsi untuk merender daftar produk dalam bentuk carousel
  const renderProductsCarousel = () => {
    const itemsPerSlide = 3; // Jumlah produk per slide
    const groupedProducts = [];

    for (let i = 0; i < products.length; i += itemsPerSlide) {
      groupedProducts.push(products.slice(i, i + itemsPerSlide));
    }

    return (
      <Carousel indicators={false} interval={null} className="product-carousel">
        {groupedProducts.map((group, index) => (
          <Carousel.Item key={index} className="text-center">
            <Row className="d-flex justify-content-center">
              {group.map((product) => (
                <Col key={product.id} xs={12} md={4} className="mb-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>
                      <Button onClick={() => addToCart(product)} className="btn btn-primary">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <>
      <Navbar />
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <div className="card-cart">
              <div className="card-card p-4">
                <Row>
                  <Col lg={7}>
                    <h5 className="mb-3">
                      <Link to="/" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </Link>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {cartItems.length} items in your cart</p>
                      </div>
                    </div>

                    {renderCartItems()}
                  </Col>

                  <Col lg={5}>
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Shipping Details</h5>
                        </div>

                        <Form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Address" name="address" value={shippingInfo.address} onChange={handleInputChange} />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleInputChange} />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Payment Method" name="paymentMethod" value={shippingInfo.paymentMethod} onChange={handleInputChange} />
                          </Form.Group>
                          <Button type="submit" className="btn btn-light btn-lg btn-block">
                            Confirm
                          </Button>
                        </Form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${calculateSubtotal().toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Tax</p>
                          <p className="mb-2">${calculateTax().toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2">${(calculateSubtotal() + calculateTax()).toFixed(2)}</p>
                        </div>

                        <Button type="button" className="btn btn-info btn-block btn-lg" onClick={() => alert("Payment successful!")}>
                          <div className="d-flex justify-content-between">
                            <span>${(calculateSubtotal() + calculateTax()).toFixed(2)}</span>
                            <span>
                              Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <h5 className="mb-3">Available Products</h5>
          {renderProductsCarousel()}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
