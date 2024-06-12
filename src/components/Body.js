import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faThumbsUp,
  faHandshake,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Body.css";

const Body = () => {
  const productsWrapperRef = useRef(null);

  const scrollLeft = () => {
    productsWrapperRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    productsWrapperRef.current.scrollLeft += 300;
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    // Fetch products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });

    // Fetch categories
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the categories:", error);
      });
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div>
        <div className="container">
          <section id="about-us" className="about-us-section mt-5">
            <h1 className="h1-center"> Tentang Kami</h1>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading lh-1">Mebelin Furniture</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, ut. Itaque quod vel incidunt, porro quo voluptate
                  hic, iusto voluptates fugit quis maiores adipisci dolorum quos
                  maxime dolorem sed nemo commodi modi in animi qui deserunt.
                  Nemo laboriosam molestias temporibus placeat harum suscipit
                  ipsum dolorum, eum libero quia facilis quae architecto
                  voluptatibus reprehenderit officia reiciendis. Nemo enim omnis
                  placeat recusandae qui magni commodi, rem debitis hic totam
                  tempora soluta, quis eos vero voluptatem, velit tenetur
                  consequatur? Tempora accusantium nesciunt id asperiores fuga
                  distinctio aut! Laborum culpa voluptatum alias aliquam
                  voluptates consequatur recusandae officiis dolore accusantium
                  in? Nostrum ullam eaque ex.
                  <br />
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src="https://m.media-amazon.com/images/I/81UwP++piNL._AC_SL1500_.jpg"
                  alt="about-us"
                  width="450"
                  height="450"
                />
              </div>
            </div>
          </section>

          {/* Bagian Why Choose Us */}
          <section id="why-choose-us" className="why-choose-us-section">
            <hr />
            <div className="row">
              <div className="col-md-3">
                <div className="card why-choose-us-card card-transition">
                  <FontAwesomeIcon icon={faMedal} size="10x" className="m-4" />

                  <div className="card-body">
                    <h5 className="card-title">Quality</h5>
                    <p className="card-text">
                      We provide high-quality products that are built to last.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card why-choose-us-card">
                  <FontAwesomeIcon
                    icon={faHandshake}
                    size="10x"
                    className="m-4"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Service</h5>
                    <p className="card-text">
                      Our team is dedicated to providing excellent customer
                      service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card why-choose-us-card">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="10x"
                    className="m-4"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Variety</h5>
                    <p className="card-text">
                      Choose from a wide range of options to suit your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card why-choose-us-card">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    size="10x"
                    className="m-4"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Affordability</h5>
                    <p className="card-text">
                      Get great products at affordable prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bagian Kategori */}
          <section id="category">
            <hr />
            <h1 className="h1-center">Kategori</h1>
            <div className="row">
              {categories.map((category, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card card-transition">
                    <Link to={`/category/${category}`}>
                      <img
                        src={`https://fakestoreapi.com/img/category${
                          index + 1
                        }.jpg`} // Placeholder for category image
                        className="card-img-top"
                        alt={category}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{category}</h5>
                      <p className="card-text">Description of {category}.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </section>

          {/* Bagian Our Products */}
          <section id="our-products" className="our-products-section">
            <div className="our-products-header">
              <h1 className="h1-product">Produk Kami</h1>

              <Link to="/all-products" className="view-products-link">
                Lihat Semua Produk →
              </Link>
            </div>
            <div className="row">
              {currentProducts.map((product) => (
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
                      <p className="card-text">
                        <strong>${product.price}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sale */}
        <section id="sale" className="container-fluid"></section>

        {/* Bagian Produk dengan navigasi */}
        <section className="products-container container">
          <h1 className="h1-center">Produk Populer</h1>
          <button className="navigation-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="products-wrapper" ref={productsWrapperRef}>
            <div className="product">
              <img src="./img/samba2.jpg" alt="Produk 1" />
              <div className="product-info">
                <h2 className="product-name">Adidas Samba OG White</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 1.540.000</span>
                  <span className="original-price">Rp 2.200.000</span>
                  <span className="discount-percentage">-30%</span>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="./img/boost.jpg" alt="Produk 2" />
              <div className="product-info">
                <h2 className="product-name">adidas Ultra Boost 20</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 960.000,00</span>
                  <span className="original-price"> Rp 1.200.000,00</span>
                  <span className="discount-percentage">-20%</span>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="img/yi.jpg" alt="Produk 3" />
              <div className="product-info">
                <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 4.549.350,00</span>
                  <span className="original-price">Rp 6.999.000</span>
                  <span className="discount-percentage">-35%</span>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="img/yi.jpg" alt="Produk 4" />
              <div className="product-info">
                <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 4.549.350,00</span>
                  <span className="original-price">Rp 6.999.000</span>
                  <span className="discount-percentage">-35%</span>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="img/yi.jpg" alt="Produk 4" />
              <div className="product-info">
                <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 4.549.350,00</span>
                  <span className="original-price">Rp 6.999.000</span>
                  <span className="discount-percentage">-35%</span>
                </div>
              </div>
            </div>
            <div className="product">
              <img src="img/yi.jpg" alt="Produk 4" />
              <div className="product-info">
                <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
                <div className="product-price">
                  <span className="discounted-price">Rp 4.549.350,00</span>
                  <span className="original-price">Rp 6.999.000</span>
                  <span className="discount-percentage">-35%</span>
                </div>
              </div>
            </div>
          </div>
          <button className="navigation-button right" onClick={scrollRight}>
            &gt;
          </button>
        </section>

        {/* Bagian FAQ */}
        <section id="faq" className="faq-section container p-3">
          <h1 className="h1-center">FAQ</h1>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Apa jenis bahan yang digunakan untuk produk furniture?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Kami menggunakan berbagai jenis bahan berkualitas tinggi
                  termasuk kayu solid, kayu lapis, MDF, dan bahan ramah
                  lingkungan lainnya untuk memastikan daya tahan dan keindahan
                  produk.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Apa saja jenis furniture yang Anda jual?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Kami menjual berbagai macam furniture untuk semua ruangan di
                  rumah Anda
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Bagaimana cara merawat produk furniture?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Untuk menjaga keindahan dan keawetan furniture, kami
                  menyarankan untuk membersihkannya dengan kain lembut dan
                  kering secara teratur dan menghindari penggunaan bahan kimia
                  keras. Kami juga menyediakan panduan perawatan spesifik untuk
                  setiap produk.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Anda menawarkan layanan pengiriman?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Ya, kami menawarkan layanan pengiriman ke seluruh Indonesia
                  dengan biaya yang bervariasi tergantung lokasi. Kami juga
                  menawarkan pengiriman gratis untuk pesanan di atas jumlah
                  tertentu.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana cara saya melakukan pembayaran?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Transfer bank: Anda dapat mentransfer pembayaran ke rekening
                  bank kami.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Body;
