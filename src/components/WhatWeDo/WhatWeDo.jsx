"use client";
import React from "react";
import "./WhatWeDo.css";
import { features } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "@/utils/animation";
function WhatWeDo() {
  return (
    <div className="wwd-container">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Empowering Founders With Non Dilutive <br />
              Capital And Execution Expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>
          <div className="wwd-blocks">
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="sec-title"
              >
                Blue Adnavces
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="text"
              >
                Fund recurring growth expenses e.g. customer <br /> acquisition,
                inventory
              </motion.span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVaraints}
                className="text"
              >
                Fund one-offs to scale e.g. <br /> product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="des">
                Data Insights and full stack <br /> expertise to supercharge
                growth
              </span>
            </div>
            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnerships, brand, intellectual property, market expansion,
                talent management
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
