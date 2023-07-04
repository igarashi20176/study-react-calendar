import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarBoard } from './CalendarBoard';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalendarBoard />
  </React.StrictMode>
);
