import React from 'react';
import './CalendarElement.css';

export const CalendarElement = (props) => {
  return (
    <div className='container'>
      <h4 className='element-title'>
        {props.date}
      </h4>
      <ul className='element-events'>
        {props.events.map((e, idx) => {
          return <li key={idx}>{e.title}</li>;
        })}
      </ul>
    </div>
  );
};