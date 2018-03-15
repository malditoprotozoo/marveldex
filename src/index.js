import React from 'react';
import ReactDOM from 'react-dom';
import './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Login from './components/login';


const App = () => {
    return (
        <BrowserRouter>
        <div>
        <Route path="/" exact component = {Home}/>
        <Route path="./components/navbar/index" component = {Navbar}/>
        <Route path="./components/login" component = {Login}/>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
