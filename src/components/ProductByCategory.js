import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/ProductByCategory.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductsByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Products in {category}</h1>
        <div className="category-row">
          {products.map((product) => (
            <div className="category-col-md-3" key={product.id}>
              <div className="category-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} className="category-card-img-top" alt={product.title} />
                </Link>
                <div className="category-card-body">
                  <h5 className="category-card-title">{product.title}</h5>
                  <p className="category-card-text">
                    <strong>${product.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsByCategory;
