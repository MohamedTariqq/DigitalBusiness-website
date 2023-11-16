import React from "react";
import { testimonialsData } from "@/utils/data";
import Image from "next/image";
import Slider from "react-slick";

const StickSlider = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    intialSlide: 0,
    touchMove: true,
    useCss: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          intialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((comment, i) => (
          <div className="comment" key={i}>
            {/* upper side */}
            <div className="c-contnet">
              <Image
                src={"/apos.svg"}
                alt="apos"
                className="aposSlider"
                width={40}
                height={30}
              />
              <span>{comment.comment}</span>
            </div>
            {/* Info */}
            <div className="c-info">
              <div className="c-avatar">{comment.name[0]}</div>
              <div className="c-person">
                <span>{comment.name}</span>
                <span>{comment.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default StickSlider;
