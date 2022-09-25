import React from "react";
import "./Slider.css";
import left from "./left.png";
import right from "./right.png";

export default function Slider() {
  return (
    <>
      <div className="slider-container">
        <div className="arrow">
          <div className="arrow-left">
            <img src={left} alt="left" />
          </div>

          <div className="arrow-right">
            <img src={right} alt="right" />
          </div>
        </div>
        <div className="wrapper">
          <div className="slide">
            <div className="info-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}
