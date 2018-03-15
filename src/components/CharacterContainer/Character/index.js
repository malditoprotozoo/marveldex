import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Image from './Image';
import './index.css'

class Character extends Component {
  render() {
    return (
      <div>
        <Image characterImage = '#' characterName = 'nombre' />
        <Name characterName = 'nombre' />
      </div>
    )
  }
}

export default Character;