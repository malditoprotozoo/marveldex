import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
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


export default App;