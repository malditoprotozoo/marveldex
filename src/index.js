import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CharacterContainer from './components/CharacterContainer';
import SearchBar from './components/navbar/searchbar/index';



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

ReactDOM.render(<App />, document.getElementById('root'));

// import { Provider } from 'react-redux';
// import { store } from './store';
// <Provider store={store}><App /></Provider>
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
