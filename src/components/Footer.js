import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="pt-4" style={{ color: "white", paddingLeft: "50px", paddingRight: "50px" }}>
      <div className="row">
        <div className="col-md-4">
          <a className="navbar-brand" href="#">
            <b>Mebelin Furniture</b>
          </a>
          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          >
            <i>&quot;Moment Become Memories&quot; </i>
          </p>
          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          >
            Jl. Prof. Dr. Hamka, Tambakaji, Kecamatan Ngaliyan
            <br />
            Kota Semarang, Jawa Tengah
            <br />
            Kode Pos 50185
          </p>
        </div>
        <div className="contact col-md-4">
          <p
            style={{
              display: "inline-block",
              marginBottom: "10",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </p>
          <p>
            <a
              href="https://www.instagram.com/aksama_photography?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "5px",
              }}
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            @aksama_photography
          </p>
          <p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "5px",
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            +62 878-1675-6130
          </p>
          <p>
            <a
              href="https://twitter.com/aksamaphotography"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "5px",
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            @aksamaphotography
          </p>
        </div>
        <div className="col-md-4">
          <p
            style={{
              display: "inline-block",
              marginBottom: "10",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Pages
          </p>
          <ul className="footer" style={{ listStyle: "none", paddingLeft: "0", fontSize: "16px" }}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-us">Tentang Kami</a>
            </li>
            <li>
              <a href="#category">Kategori</a>
            </li>
            <li>
              <a href="#our-products">Produk</a>
            </li>
          </ul>
        </div>

        <hr />
        <p className="fw-light text-center">© 2024 Mebelin Furniture. All Right Reserved</p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
