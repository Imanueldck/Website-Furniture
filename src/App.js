import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Body from "./components/Body";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetail from "./components/ProductDetail";
import ProductsByCategory from "./components/ProductsByCategory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousel />
              <Body />
              <WhatsAppWidget />
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<ProductsByCategory />} />
      </Routes>
    </Router>
  );
};

export default App;
