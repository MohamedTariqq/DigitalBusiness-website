import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "@/utils/animation";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              Our difference
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Fair Capital, Hassle Free
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="text"
            >
              Our mission is to level the playing field for early stage growth
              capital. We provide capital that is unbiased, flexible and non
              dilutive with the execution support to accelerate value creation.
            </motion.span>
          </div>
          {/* Features */}
          <div className="od-fetaures">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants((i + 1) * 0.1)}
                key={i}
                className="od-fetaure"
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  height={128}
                  width={128}
                />
                <span className="title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
