import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CharacterContainer from './components/CharacterContainer/index';



class App extends Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div className="Navbar">
          <Navbar />
          <CharacterContainer/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
