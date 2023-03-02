import React, { useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BsBlockquoteLeft } from "react-icons/bs";
import { SiBmcsoftware } from "react-icons/si";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdOutlineAddIcCall } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const HamburgerMenu = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className="ham-icon">
        {display ? (
          <RxCrossCircled
            color="black"
            fontSize="2em"
            onClick={() => setDisplay(!display)}
          />
        ) : (
          <HiMenuAlt3
            color="black"
            fontSize="2em"
            onClick={() => setDisplay(!display)}
          />
        )}
      </div>
      <div className={display ? "hamburger-menu-true" : "hamburger-menu-false"}>
        <Link style={{ textDecoration: "none" }} to="/about">
          <div className="hamburger-menu-line">
            <AiOutlineProfile color="black" fontSize="1.5em" />
            About
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/services">
          <div className="hamburger-menu-line">
            <SiBmcsoftware color="black" fontSize="1.5em" />
            Services
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="https://medium.com/@rahulpanchaloff"
        >
          <div className="hamburger-menu-line">
            <BsBlockquoteLeft color="black" fontSize="1.5em" />
            Blogs
          </div>
        </Link>
        <div className="hamburger-menu-line">
          <MdOutlineAddIcCall color="black" fontSize="1.5em" />
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="tel:+916392758956"
          >
            Call Us
          </a>
        </div>
        <div className="hamburger-menu-line">
          <MdOutlineMailOutline color="black" fontSize="1.5em" />
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto:rahulpanchaloff@gmail.com"
          >
            Mail Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
