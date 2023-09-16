import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IntershipState from './context/internship/InternshipState';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <IntershipState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntershipState>
);

