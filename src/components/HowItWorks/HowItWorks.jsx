import React from "react";
import "./HowItWorks.css";
import { hitFeatures } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints } from "@/utils/animation";
const HowItWorks = () => {
  const featureVaraints = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="hit-wrapper">
      <div className="container">
        <div className="hit-contianer">
          {/* Head */}
          <div className="hit-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Unlocking Potential Along The Growth Journey
            </motion.span>
          </div>
          {/* Features */}
          <div className="hit-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVaraints}
                key={i}
                className="hit-feature"
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="details"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={128}
                    height={128}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
