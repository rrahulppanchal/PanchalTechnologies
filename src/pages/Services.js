import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import websiteImg from "../assets/software-engineer.png";
import Consultant from "../assets/consultant.png";
import Designer from "../assets/designer.png";

export default function Services() {
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
      <div className="service-container">
        <div className="service">
          <img src={websiteImg} alt="website" />
          <div className="detail">
            <h1>Website Development</h1>
            <p>
              We specialize in providing high-quality web development services
              to businesses of all sizes. We understand the importance of a
              strong online presence in today's digital world, and we strive to
              help our clients achieve their goals by creating innovative and
              effective web solutions. Whether you're a startup or an
              established business, we work closely with you to understand your
              unique needs and tailor our services accordingly. Our team of
              experienced developers is committed to delivering top-notch
              results that will help you achieve success and grow your business.
              With our expertise and guidance, you can make a smooth digital
              transition and thrive in the online marketplace.
            </p>
            <span className="contacts">
              For more enquiry contact : +91 6392758956
            </span>
          </div>
        </div>
        <div className="service">
          <img src={Consultant} alt="website" />
          <div className="detail">
            <h1>Consulting</h1>
            <p>
              We provide expert technology consulting services to businesses
              looking to thrive in the digital age. We understand that
              technology is a critical component of success in today's
              marketplace, and we work closely with our clients to provide
              tailored solutions that address their unique needs. Whether you're
              a small startup or a large corporation, we offer comprehensive
              consulting services that cover everything from IT strategy and
              planning to software development and implementation. Our team of
              experienced consultants is dedicated to helping businesses make a
              smooth digital transition and achieve long-term success. With our
              guidance and support, you can leverage technology to your
              advantage and unlock new opportunities for growth and prosperity.
            </p>
            <span className="contacts">
              For more enquiry contact : +91 6392758956
            </span>
          </div>
        </div>
        <div className="service">
          <img src={Designer} alt="website" />
          <div className="detail">
            <h1>Designing</h1>
            <p>
              We specialize in providing top-quality design services to
              businesses of all sizes. We understand that a well-designed brand
              identity and user interface can make all the difference in the
              success of a business, and we are dedicated to helping our clients
              achieve their goals through innovative and effective design
              solutions. Whether you're looking to update your website, create a
              new logo, or design a user-friendly mobile app, our team of
              experienced designers is here to help. We work closely with our
              clients to understand their unique needs and tailor our services
              accordingly. With our expertise and guidance, you can make a
              smooth digital transition and attract more customers to your
              business.
            </p>
            <span className="contacts">
              For more enquiry contact : +91 6392758956
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
