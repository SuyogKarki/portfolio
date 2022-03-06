import React from 'react';
import { NotificationProvider } from './components';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>,
  document.getElementById('root')
);
