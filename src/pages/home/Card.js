import React from "react";
import webImg from "../../assets/software-engineer.png";
import writeImg from "../../assets/designer.png";

import consultImg from "../../assets/consultant.png";

export default function Card() {
  return (
    <div className="cards">
      <div className="cards-detail">
        <img style={{ width: "100%" }} src={webImg} alt="alt" />
        <h1>Websites</h1>
        <p>
          We at Panchal Technologies deliver professional web development
          services that help businesses establish a strong online presence. Our
          team creates responsive, user-friendly websites that drive engagement
          and conversions.
        </p>
        <button className="cta1">
          <span className="hover-underline-animation">Learn More </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
      <div className="cards-detail">
        <img style={{ width: "100%" }} src={writeImg} alt="alt" />

        <h1>Designing</h1>
        <p>
          We specialize in offering high-quality design services to businesses
          of all sizes and types. Our design team leverages the latest tools and
          techniques to create visually stunning and effective designs that
          elevate brands and attract customers.
        </p>
        <button className="cta1">
          <span className="hover-underline-animation"> Learn More </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
      <div className="cards-detail">
        <img style={{ width: "100%" }} src={consultImg} alt="alt" />

        <h1>Consulting</h1>
        <p>
          We specializes in providing comprehensive technological consulting
          services to businesses, offering strategic guidance and practical
          solutions to help clients navigate the complexities of digital
          landscape and stay ahead of the competition.
        </p>
        <button className="cta1">
          <span className="hover-underline-animation"> Learn More </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
