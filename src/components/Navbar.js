import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
export default function Navbar() {
  return (
    <>
      <div id="home" className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img style={{ height: "60px" }} src={Logo} alt="" />
          </Link>
          <div className="nav_links">
            <span className="about">
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </span>
            <span className="services">
              <Link style={{ textDecoration: "none" }} to="/services">
                Services
              </Link>
            </span>
            <span className="blogs">
              <Link
                style={{ textDecoration: "none" }}
                to="https://medium.com/@rahulpanchaloff"
              >
                Blogs
              </Link>
            </span>
          </div>
        </div>

        <span className="enquire">
          <Link style={{ textDecoration: "none" }} to="/services">
            <button className="cta">
              <span>Enquire</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
          <HamburgerMenu />
        </span>
      </div>
    </>
  );
}
