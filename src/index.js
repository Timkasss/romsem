import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './i18n';

import {
  BrowserRouter as Router,

} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
