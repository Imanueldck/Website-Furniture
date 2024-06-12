import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/ProductByCategory.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";
import "../css/ProductByCategory.css";

const ProductByCategory = () => {
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
      <div className="container">
        <h1>Products in {category}</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
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
