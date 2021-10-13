import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ width }) => {
  const [value, setValue] = useState(0);

  const updateIndex = () => {
    if (value === 3) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(value + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      key={SliderData[value].id}
      style={{ background: `url(${SliderData[value].image})` }}
      className="slider"
    >
      <div className="slider-info">
        <div className="container">
          <div className="slider-info-big">
            <h5>{SliderData[value].title}</h5>
            <p>{SliderData[value].description}</p>
            <a href="#getstarted">Ready to get started</a>
          </div>
          <div className="controls">
            <a
              className="controls-theme prev"
              href="#prev"
              onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
            >
              <span>
                <FaChevronLeft />
              </span>
            </a>
            <a
              className="controls-theme next"
              href="#next"
              onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
            >
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
