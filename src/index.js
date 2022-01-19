import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterList from './components/CounterList'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterList />
  </React.StrictMode>,
  document.getElementById('root')
);

