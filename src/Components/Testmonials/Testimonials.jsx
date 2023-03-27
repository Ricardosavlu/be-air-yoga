import React, { useState } from 'react';
import './Testimonials.css';
import { testimonials } from '../../Data/testimonialsData';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/rightArrow.svg';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonials.length;

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonials[selected]?.review}</span>
        <span>
          <span>{testimonials[selected]?.name}</span>
          <span>- {testimonials[selected]?.status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonials[selected].image} alt="" />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />

          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
