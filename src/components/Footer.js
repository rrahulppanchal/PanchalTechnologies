import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer_container">
      <hr />

      <div className="footer_main">
        <div className="header">
          <h2>Header</h2> <Link style={{ textDecoration: "none" }}>Home</Link>
          <Link htmlFor="home" to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            Our Services
          </Link>
          <Link style={{ textDecoration: "none" }}>Blogs</Link>
          <a
            style={{ textDecoration: "none" }}
            href="mailto:rahulpanchaloff@gmail.com"
          >
            Contact
          </a>
        </div>
        <div className="info">
          <h2>Stack Info</h2>{" "}
          <Link style={{ textDecoration: "none" }}>MEAN Stack Developer</Link>
          <Link style={{ textDecoration: "none" }}>MERN Stack Developer</Link>
          <Link style={{ textDecoration: "none" }}>Python Developer</Link>
          <Link style={{ textDecoration: "none" }}>Android Developer</Link>
        </div>
        <div className="social_info">
          <img style={{ width: "200px" }} src={Logo} alt="Logo" />
          <span className="quote">
            If your business is not online, it might as well not exist.
          </span>
          <div className="phone">
            <BsFillTelephoneFill color="black" fontSize="1.5em" />

            <a style={{ textDecoration: "none" }} href="tel:+91 6392758956">
              +91 6392758956
            </a>
          </div>
          <div className="email">
            <MdEmail color="black" fontSize="1.5em" />
            <a
              style={{ textDecoration: "none" }}
              href="mailto:rahulpanchaloff@gmail.com"
            >
              contact@panchaltechnologies.com
            </a>
          </div>
          <div className="email">
            <MdLocationPin color="black" fontSize="1.5em" />
            India
          </div>
        </div>
      </div>
      <hr />

      <div className="copy_right">
        Copyright © {currentYear}, All Right Reserved
      </div>
    </div>
  );
}
