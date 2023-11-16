import React from "react";
import "./Footer.css";
import EmailBox from "@/components/EmailBox/EmailBox";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today!</span>
          <EmailBox />
          <hr />
          <div className="f-menu">
            <Link to="h-wrapper" span={true} smooth={true}>
              <span>Home</span>
            </Link>
            <Link to="wwd-container" span={true} smooth={true}>
              <span>WHAT WE DO</span>
            </Link>
            <Link to="hit-wrapper" span smooth offset={100}>
              <span>HOW IT WORKS</span>
            </Link>
            <Link to="wii-wrapper" span smooth>
              <span>WHO WE INVEST IN</span>
            </Link>
            <Link to="t-wrapper" span smooth offset={100}>
              <span>TESTIMONIALS</span>
            </Link>
          </div>
          <hr />
          <span className="text">Made with ❤️ by MohamedTarek</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
