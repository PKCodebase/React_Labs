import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('myroot')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)