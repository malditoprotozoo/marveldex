import React, { Component } from 'react';
import Navbar from './navbar';
import CharacterContainer from './CharacterContainer/index';

class Home extends Component {
  render() {
    return (
      <div>
        <CharacterContainer/>
      </div>
    )
  }
}

export default Home;