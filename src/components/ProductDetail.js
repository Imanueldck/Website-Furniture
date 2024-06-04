import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/ProdukDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [cart, setCart] = useState([]);

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
      .get(`https://fakestoreapi.com/products/${id}/reviews`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product reviews:", error);
      });
  }, [id]);

  const addToCart = () => {
    setCart([...cart, product]);
    alert("Product added to cart!");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="detail-column image-column">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-column title-column">
          <h1>{product.title}</h1>
        </div>
        <div className="detail-column info-column">
          <p>{product.description}</p>
          <p>
            <strong>${product.price}</strong>
          </p>
          <div className="product-actions">
            <input type="number" defaultValue="1" min="1" />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="review-container">
        <h2>Ulasan</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review">
              <p>
                <strong>{review.name}</strong>
              </p>
              <p>{review.review}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))
        ) : (
          <p>Belum ada ulasan.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
