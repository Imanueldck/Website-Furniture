import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const TAX_RATE = 0.01;

  // State untuk menyimpan jumlah barang
  const [items, setItems] = useState([
    { id: 1, name: "Iphone 11 pro", quantity: 2, price: 900 },
    { id: 2, name: "Samsung galaxy Note 10", quantity: 2, price: 900 },
    { id: 3, name: "Canon EOS M50", quantity: 1, price: 1199 },
    { id: 4, name: "MacBook Pro", quantity: 1, price: 1799 },
  ]);

  // State untuk menyimpan informasi pengiriman
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  // Fungsi untuk menambah jumlah barang
  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // Fungsi untuk menghapus item dari keranjang belanja
  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Menghitung total harga barang
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
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
  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id} className="card-cart mb-3">
        <div className="card-cart">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img${item.id}.webp`} className="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
              </div>
              <div className="ms-3">
                <h5>{item.name}</h5>
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
                <h5 className="mb-0">${item.price * item.quantity}</h5>
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

  return (
    <>
      <Navbar />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card-cart">
              <div className="card-card p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <Link to="/" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </Link>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {items.length} items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{" "}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    {renderItems()}
                  </div>

                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Shipping Details</h5>
                        </div>

                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Address" name="address" value={shippingInfo.address} onChange={handleInputChange} />
                          </div>
                          <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleInputChange} />
                          </div>
                          <div className="mb-3">
                            <select className="form-select" name="paymentMethod" value={shippingInfo.paymentMethod} onChange={handleInputChange}>
                              <option value="">Select Payment Method</option>
                              <option value="credit_card">Credit Card</option>
                              <option value="paypal">Paypal</option>
                              <option value="bank_transfer">Bank Transfer</option>
                            </select>
                          </div>
                          <button type="submit" className="btn btn-info btn-block">
                            Checkout
                          </button>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <span>Subtotal</span>
                          <span>${calculateSubtotal()}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Tax ({TAX_RATE * 100}%)</span>
                          <span>${calculateTax()}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>Total</span>
                          <span>${calculateSubtotal() + calculateTax()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
