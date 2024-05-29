import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer
      className="pt-4"
      style={{ color: "white", paddingLeft: "50px", paddingRight: "50px" }}
    >
      <div className="row">
        <div className="col-md-4">
          <a className="navbar-brand" href="#">
            <b>Mebel</b>
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
        <div className="contact col-md-3">
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
        <div className="col-md-2">
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
          <ul
            className="footer"
            style={{ listStyle: "none", paddingLeft: "0", fontSize: "16px" }}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#must">About Us</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2" style={{ marginLeft: "0px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "2px",
            }}
          >
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            &nbsp;Maps
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31680.153554306577!2d110.32942134577178!3d-7.007022456103897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708a9237037db7%3A0xcadd6af7e18aa4dd!2sNgaliyan%2C%20Kec.%20Ngaliyan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1710909888555!5m2!1sid!2sid"
              width="500px"
              className="img-fluid"
              style={{ border: "0", marginTop: "10px", marginBottom: "3px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />
        <p className="fw-light text-center">© 2024 Mebel. All Right Reserved</p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
