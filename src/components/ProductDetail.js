import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../css/ProductDetail.css";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the Footer component

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]); // State to store products added to the cart
  const productsPerPage = 4; // Number of products per page
  const totalPages = Math.ceil(availableProducts.length / productsPerPage);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product details:", error);
      });

    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setAvailableProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching available products:", error);
      });
  }, [id]);

  const handlePageChange = (action) => {
    if (action === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (action === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]); // Add product to cart with the selected quantity
  };

  if (!product || !availableProducts.length) {
    return <div>Loading...</div>;
  }

  // Calculate the start and end index of products displayed on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = availableProducts.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="container-detail">
        <div className="main-product">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <p className="product-id">Product ID : {product.id}</p>
            <h1 className="product-name">{product.title}</h1>
            <p className="product-price">Harga : ${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Tambah ke keranjang
            </button>
          </div>
        </div>
        <div className="product-info">
          <div className="description">
            <h2>Deskripsi</h2>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="product-slider">
          <h2>Featured Products</h2>
          <div className="slider-container">
            <button
              className="slider-button prev"
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <div className="product-cards">
              {currentProducts.map((prod) => (
                <div key={prod.id} className="product-card">
                  <Link to={`/product/${prod.id}`}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="product-card-image"
                    />
                    <h3 className="product-card-title">{prod.title}</h3>
                    <p className="product-card-price">${prod.price}</p>
                  </Link>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(prod, 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            <button
              className="slider-button next"
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
