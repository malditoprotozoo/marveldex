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
import Home from './components/Home';
import Login from './components/login';


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
          <SearchBar onTermChange={this.handleTermChange} />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      );
    }
  }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
