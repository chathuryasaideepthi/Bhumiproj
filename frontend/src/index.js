// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/FeedbackForm.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // optional if using service worker

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker (optional — use only if needed for offline support)
serviceWorkerRegistration.register();
