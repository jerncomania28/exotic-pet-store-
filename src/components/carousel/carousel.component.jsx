import { useState } from "react";
import { CarouselImages } from "../all-images /export-images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   FaRegArrowAltCircleLeft,
//   FaRegArrowAltCircleRight,
// } from "react-icons/fa";
//styles
import "./carousel.styles.scss";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={CarouselImages[current]} alt="carousel" />
      </div>
      <div className="carousel-controllers">
        <FontAwesomeIcon
          className="previous-button button"
          icon="circle-chevron-left"
          onClick={() => {
            current === 0
              ? setCurrent(CarouselImages.length - 1)
              : setCurrent(current - 1);
          }}
        />
        <div className="indicators">
          <div className="indicators-circle"></div>
          <div className="indicators-circle"></div>
          <div className="indicators-circle"></div>
          <div className="indicators-circle"></div>
        </div>
        <FontAwesomeIcon
          className="next-button button"
          icon="circle-chevron-right"
          onClick={() => {
            current === CarouselImages.length - 1
              ? setCurrent(0)
              : setCurrent(current + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
