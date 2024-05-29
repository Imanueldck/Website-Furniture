import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
    </div>
  );
};

export default ProductDetail;
