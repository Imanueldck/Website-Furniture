import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/AllProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-allproduct">
        <div className="row align-items-start">
          <div className="col-12">
            <h1 className="my-4">All Products</h1>
          </div>
          <div className="col-md-2">
            <div className="card-category">
              <div className="card-header">Category</div>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item ${
                    selectedCategory === "" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("")}
                >
                  All Products
                </li>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <section id="all-products" className="all-products-section">
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-3 mb-5" key={product.id}>
                    <div className="card our-produk-card">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
