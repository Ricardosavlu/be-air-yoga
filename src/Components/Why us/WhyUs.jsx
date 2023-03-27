import React from 'react';
import './WhyUs.css';
import Client1 from '../../assets/Client1.png';
import Client3 from '../../assets/Client3.jpg';
import Yogi4 from '../../assets/yogi4.png';
import Client2 from '../../assets/Client2.png';
import arrow from '../../assets/arrow.svg';

const WhyUs = () => {
  return (
    <div className="why-us" id="why-us">
      <div className="left-wu">
        <img src={Client1} alt="" />
        <img src={Client2} alt="" />
        <img src={Client3} alt="" />
        <img src={Yogi4} alt="" />
      </div>
      <div className="right-wu">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span>Choose us?</span>
        </div>

        <div className="details">
          <div>
            <img src={arrow} alt="" />
            <span>CERTIFICATED TEACHERS</span>
          </div>
          <div>
            <img src={arrow} alt="" />
            <span>MORE THAN 100 RECORDED CLASSES </span>
          </div>
          <div>
            <img src={arrow} alt="" />
            <span>SUPORT FROM OUR TEACHERS TEAM FOR DOUBTS </span>
          </div>
          <div>
            <img src={arrow} alt="" />
            <span>
              7 DAYS TRIAL, IF YOU DO NOT LIKE WE GIVE YOUR MONEY BACK{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
