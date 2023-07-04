import React from "react";
import './InputEvent.css';

export const InputEvent = (props) => {
  return (
    <form className="event-form" onSubmit={props.addEvent}>
      <h3>inputBox</h3>
      <div>
        <label className="input-box">title
          <input onChange={} type="text" name="title" value={} placeholder="title..." />
        </label>
      </div>
      <div>
        <label className="input-box">date
          <input onChange={} type="number" name="date" value={} placeholder="date..." />
        </label>
      </div>
      <div>
        <label className="input-box">location
          <input onChange={} type="text" name="location" value={} placeholder="location..." />
        </label>
      </div>

      <button type="submit">イベントを追加</button>
    </form>
  );
};
