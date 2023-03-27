import React from 'react';
import './Plans.css';
import { plansData } from '../../Data/plansData';
const Plans = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">COME</span>
        <span>BE AIR</span>
        <span className="stroke-text">WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <span key={i}>☁ {feature}</span>
                </div>
              ))}
            </div>

            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
