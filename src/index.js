import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
