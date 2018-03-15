import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS
import Navbar from './components/navbar/index';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
