import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner_1.jpg";
import banner2 from "../../../images/banner_2.jpg";

const Banner = () => {
  // Homepage slide banner
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="theme_color">The wind is not even close to us </h1>
          <p>A car used for transportation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h1 className="theme_color">We have everything your car needs! </h1>
          <p>A vehicle that can carries passengers.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
