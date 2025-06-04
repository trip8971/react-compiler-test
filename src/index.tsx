import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing the new App component
import './app/globals.css'; // Importing global styles

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
