import React from 'react';
import './Pograms.css';
import { programsData } from '../../Data/ProgramsData';

const Programs = () => {
  return (
    <div className="programs-container" id="Programs">
      <div className="programs-header">
        <span className="stroke-text">Choose the best</span>
        <span>program</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            <img src={program.image} alt="" />

            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
