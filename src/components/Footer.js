import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <React.Fragment />
      <footer className="footer-1 py-4 text-light">
        <div className="container py-2">
          <div className="row mb-0">
            <div className="col-12 col-lg-5">
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
            <div className="col-12 col-md-4">
              <ul className="mb-0 list-unstyled">
                <div className="row">
                  <div className="col-12">
                    <h4 className="h6 text-wrapper mb-3 font-weight-bold">
                      CONTACT US
                    </h4>
                    <li className="p-0 mt-0">
                      <ul className="list-unstyled">
                        <li className="d-inline me-3">
                          <a
                            className="text-light link-nodecor"
                            target="_blank"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faXTwitter} size="xl" />
                          </a>
                        </li>
                        <li className="d-inline me-3">
                          <a
                            className="text-light link-nodecor"
                            target="_blank"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faFacebookF} size="xl" />
                          </a>
                        </li>
                        <li className="d-inline me-3">
                          <a
                            className="text-light link-nodecor"
                            target="_blank"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                          </a>
                        </li>
                        <li className="d-inline me-3">
                          <a
                            className="text-light link-nodecor"
                            target="_blank"
                            href="#"
                          >
                            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <p className="h6 lh-p mb-3 font-weight-bold">PAGES</p>
              <ul className="footer mb-0 list-unstyled">
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
          </div>
        </div>
      </footer>
      <footer class="footer-2 py-2 text-light privacy">
        <p class="text-center px-5 mb-0 d-flex flex-column flex-sm-row justify-content-center">
          <span class="mb-1 mb-sm-0">
            © 2024 Mebelin Furniture. All Rights Reserved.
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
