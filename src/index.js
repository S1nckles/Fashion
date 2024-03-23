import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './Assets/css/reset.css';
import './Assets/css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);