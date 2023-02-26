import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "./Card";
import OfferCard from "./OfferCard";

import img from "../../assets/about-ill.webp";
import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMysql, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <h1>
          Website Development <br /> for business
        </h1>
        <h3>
          Our main approach is to transform your ideas into tangible reality by
          utilising technology that meets the standards of your ideal concepts.
        </h3>
        <div className="buttons">
          <Link to="/services">
            <button>Read</button>
          </Link>
          <Link to="/services">
            <button>Services</button>
          </Link>
        </div>
        <div className="features"></div>
      </div>
      <OfferCard />
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Who we are?</h1>
      <div className="home-about">
        <img draggable={false} src={img} alt="img" />
        <div className="details">
          <h2>Website Development</h2>
          <p>
            We specialize in customized web development for diverse businesses.
            Our developers craft visually appealing, search engine optimized
            websites that offer great user experience, responsive design, and
            security. Our services enable businesses to build a strong online
            presence and drive growth.
          </p>
        </div>
      </div>
      <Card />

      <div className="credentials">
        <SiJavascript color="gray" fontSize="7em" />
        <FaReact color="gray" fontSize="7em" />
        <FaAngular color="gray" fontSize="7em" />
        <FaNodeJs color="gray" fontSize="7em" />
        <DiMongodb color="gray" fontSize="7em" />
        <SiMysql color="gray" fontSize="7em" />
        <SiPostgresql color="gray" fontSize="7em" />
      </div>

      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>What we offer?</h1>
      <div className="home-about">
        <img draggable={false} src={img} alt="img" />
        <div className="details">
          <h2>Services</h2>
          <p>
            We offer web development services in cutting-edge technologies like
            ReactJS, Angular, and others. Our team of skilled developers creates
            websites that are visually appealing, user-friendly, and optimized
            for search engines. We specialize in building responsive, secure,
            and scalable websites that enable businesses to establish a strong
            online presence and engage with their customers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
