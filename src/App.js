import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Navbar">
        <Navbar />
      </div>
    );
  }
}


export default App;