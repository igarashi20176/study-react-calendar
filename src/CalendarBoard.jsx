import React, { useState, useCallback, useMemo } from 'react';
import './CalendarBoard.css';

import { CalendarElement } from './CalendarElement';
import { InputEvent } from './InputEvent';

export const CalendarBoard = () => {
  const today = new Date();
  const [year, month] = [today.getFullYear(), today.getMonth()]

  const calendarBoard = useMemo(() => {
    return Array(35)
      .fill(0)
      .map((_, i) => {
        const firstDate = new Date(year, month, 1);
        const firstDayIndex = firstDate.getDay();
        const currDay = i - firstDayIndex;

        firstDate.setDate(firstDate.getDate() + currDay);
        const boardDate = firstDate.getDate();
        return boardDate;
      });
  }, [year, month]);

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

  // 第二引数にeventsを格納しないと，初期状態のstate(events)を参照してしまう
  const getEventsByDate = useCallback((date) => {
    return events.filter((e) => {
      return date === Number(e.date)
    });
  }, [events])

  const addEvent = useCallback((e) => {
    e.preventDefault();

    setEvents(prevEvents => [...prevEvents, inputEvent]);
    setInputEvent({
      title: "",
      date: 0,
      location: ""
    })
  }, [inputEvent])

  const handleInputEvent = useCallback((e) => {
    const {name, value} = e.target

    setInputEvent(prevInput => (
      {
        ...prevInput,
        [name]: value
      }
    ))
  }, []);

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