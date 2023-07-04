import React from 'react';
import './CalendarElement.css';

export const CalendarElement = (props) => {
  return (
    <div className='container'>
      <h4 className='element-title'>
        title
      </h4>
      <ul className='element-events'>
        <li>events</li>
      </ul>
    </div>
  );
};
