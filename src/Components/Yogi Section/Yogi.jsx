import React from 'react';
import './Yogi.css';
import Meditation from '../../assets/Logo.png';

const Yogi = () => {
  return (
    <div className="Yogi" id="Yogi">
      <div className="left-y">
        <div className="h1">
          <span>BE AIR.</span>
          <span className="stroke-text">YOUR MOMENT</span>
          <span className="stroke-text">TO FLOAT</span>
        </div>
        <div className="description">
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
          <span>Eveniet reprehenderit cum sint sed </span>
          <span>culpa minus temporibus mollitia delectus iste.</span>
          <span>Deleniti dolorem repellat est laboriosam quae voluptates</span>
          <span>nemo enim officia illum?</span>
        </div>
      </div>

      <div className="right-y">
        <img src={Meditation} alt="" />
      </div>
    </div>
  );
};

export default Yogi;
