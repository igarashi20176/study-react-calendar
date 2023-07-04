import React, { useState, useCallback, useMemo } from 'react';
import './CalendarBoard.css';

import { CalendarElement } from './CalendarElement';
import { InputEvent } from './InputEvent';

export const CalendarBoard = () => {
  const today = new Date();
  const [year, month] = [today.getFullYear(), today.getMonth()]

  const calendarBoard // カレンダーの作成

  const [events, setEvents] = useState([
    {
      title: "映画館に行く",
      date: 5,
      location: "映画館A"
    },
    {
      title: "cadence",
      date: 5,
      location: "研究室906"
    },
    {
      title: "バイト",
      date: 27,
      location: "居酒屋B"
    },
  ])

  console.log(events);

  const [inputEvent, setInputEvent] = useState({
    title: "",
    date: 0,
    location: ""
  });
  
  function getEventsByDate(date) {}

  function addEvent() {} // e.preventDefault()

  function handleInputEvent(event) {}

  return (
      <div className='container'>
        <div className='event-input'>
          <InputEvent addEvent={addEvent} handleInputEvent={handleInputEvent} inputEvent={inputEvent} />
        </div>
        <div className='elements-grid'>
          {calendarBoard.map((date, idx) => {
            return <CalendarElement key={idx} date={date} events={getEventsByDate(date)} />;
          })}
        </div>
      </div>
  );
};
