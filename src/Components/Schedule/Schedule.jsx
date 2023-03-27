import React from 'react';
import './Schedule.css';
import { TEACHERS } from '../../Data/Teachers';
import Teacher from './Teacher/Teacher';

const Schedule = () => {
  return (
    <div className="scheduleContainer" id="schedule">
      <div className="scheduleTitle">
        <span className="stroke-text">WHO</span>
        <span>we are</span>
      </div>

      <div className="scheduleHours">
        {TEACHERS.map((teacher) => (
          <Teacher
            key={teacher.name}
            imageSrc={teacher.imageSrc}
            name={teacher.name}
            description={teacher.description}
            styles={teacher.styles}
            days={teacher.days}
            hours={teacher.hours}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
