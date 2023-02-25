import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Techurls from "../assets/techurl.png";
import fpassets from "../assets/fpassets.png";

import ag from "../assets/ag.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>
          Our goal is to illuminate the intersection of technology and the ideas
          of brilliant individuals, working together on every project.
        </h1>
        <p>
          There are many ways businesses can leverage through technology.
          Website is one of them.
        </p>
      </div>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome! We are a website development company that is dedicated to
          providing efficient solutions to businesses of all sizes. Our ultimate
          goal is to help our clients' businesses soar to new heights through
          the power of technology. <br />
          At our company, we specialize in a wide variety of cutting-edge
          technologies to help our clients achieve their goals. Whether you need
          a simple website, a complex e-commerce platform, or a custom software
          solution, we have the expertise to deliver the results you need.{" "}
          <br />
          We understand that every business is unique, which is why we take a
          personalized approach to each project we undertake. Our team of
          skilled professionals works closely with our clients to ensure that
          every project meets their specific needs and exceeds their
          expectations. <br />
          Our mission is to provide our clients with high-quality,
          cost-effective solutions that will help them grow their business and
          achieve long-term success. So if you're looking for a website
          development company that is dedicated to helping you reach your full
          potential, look no further than us!
        </p>
        <br />
      </div>
      <div className="about-cards">
        <div className="card">
          <div className="card-details">
            <img style={{ maxWidth: "100px" }} src={Techurls} alt="TechURLs" />
            <p className="text-title">Tech URL</p>
            <p className="text-body">Technical News Agregator.</p>
          </div>
          <Link to="https://techurls.com">
            <button className="card-button">More info</button>
          </Link>
        </div>
        <div className="card">
          <div className="card-details">
            <img style={{ maxWidth: "100px" }} src={fpassets} alt="fpassets" />

            <p className="text-title">FP-ASSETS</p>
            <p className="text-body">Crypto Currency Web App. </p>
          </div>
          <Link to="https://fp-assets.com">
            <button className="card-button">More info</button>
          </Link>
        </div>
        <div className="card">
          <div className="card-details">
            <img style={{ maxWidth: "100px" }} src={ag} alt="AG" />

            <p className="text-title">Activity Galore</p>
            <p className="text-body">Social Events hosting Website</p>
          </div>

          <Link to="https://tinyurl.com/agalore">
            <button className="card-button">More info</button>
          </Link>
        </div>
        <div className="card">
          <div className="card-details">
            <img style={{ maxWidth: "100px" }} src={ag} alt="AG" />

            <p className="text-title">Activity Galore</p>
            <p className="text-body">Social Events hosting Website</p>
          </div>

          <Link to="https://tinyurl.com/agalore">
            <button className="card-button">More info</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
