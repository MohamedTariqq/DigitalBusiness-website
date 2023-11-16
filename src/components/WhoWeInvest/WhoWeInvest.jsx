"use client";
import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "@/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVaraints,
  titleVaraints,
} from "@/utils/animation";
const WhoWeInvest = () => {
  return (
    <div className="wii-wrapper">
      <div className="container">
        <div className="wii-contianer">
          {/* Left Side */}
          <div className="wii-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Digital Businesses With Early Traction
              </motion.span>
            </div>
            {/* Features */}
            <div className="wii-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(i * 0.05 + 1)}
                  className="wii-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className="wwi-right">
            <motion.img
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants(0.5)}
              src="persons.png"
              alt="persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
