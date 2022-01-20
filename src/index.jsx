import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import './style.css';
import App from './App';
import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
