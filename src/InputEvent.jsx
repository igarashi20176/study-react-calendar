import React from "react";
import './InputEvent.css';

export const InputEvent = (props) => {
  return (
    <form className="event-form" onSubmit={props.addEvent}>
      <h3>inputBox</h3>
      <div>
        <label className="input-box">title
          <input onChange={props.handleInputEvent} type="text" name="title" value={props.inputEvent.title} placeholder="title..." />
        </label>
      </div>
      <div>
        <label className="input-box">date
          <input onChange={props.handleInputEvent} type="number" name="date" value={props.inputEvent.date} placeholder="date..." />
        </label>
      </div>
      <div>
        <label className="input-box">location
          <input onChange={props.handleInputEvent} type="text" name="location" value={props.inputEvent.location} placeholder="location..." />
        </label>
      </div>

      <button type="submit">イベントを追加</button>
    </form>
  );
};