import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
//import CharacterDetail from './components/CharacterDetail';
import CharacterContainer from './components/CharacterContainer';
import SearchBar from './components/navbar/searchbar/index';
import './firebase';


class App extends Component {
    constructor() {
      super();
      this.state = {};
    }
      handleTermChange(term) {
        console.log(term);
      
    }
  
    render() {
      return (
        <div className="Navbar">
          <Navbar />
          <CharacterContainer/>
          <SearchBar onTermChange={this.handleTermChange} />
        </div>
      );
    }
  }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
