"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mopMenuOpened, setMopMenuopened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      <div className="container">
        <div className="n-container">
          {/* Left Side */}
          <div className="n-logo">
            <span>DigitalBusiness</span>
          </div>
          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
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
            <div className="nav-button">get funded</div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="nm-container">
        <span>DigitalBusiness</span>
        {/* Menu icon */}
        {!mopMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMopMenuopened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMopMenuopened(false)} />
        )}
        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mopMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMopMenuopened(false)}
            to="wwd-container"
            span={true}
            smooth={true}
          >
            <span>WHAT WE DO</span>
          </Link>
          <Link
            onClick={() => setMopMenuopened(false)}
            to="hit-wrapper"
            span
            smooth
            offset={100}
          >
            <span>HOW IT WORKS</span>
          </Link>
          <Link
            onClick={() => setMopMenuopened(false)}
            to="wii-wrapper"
            span
            smooth
          >
            <span>WHO WE INVEST IN</span>
          </Link>
          <Link
            onClick={() => setMopMenuopened(false)}
            to="t-wrapper"
            span
            smooth
            offset={100}
          >
            <span>TESTIMONIALS</span>
          </Link>
          <div className="nm-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
