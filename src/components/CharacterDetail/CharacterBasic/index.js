import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import AddFav from './AddFav';
import SeeMore from './SeeMore';
import './index.css';

class CharacterBasic extends Component {
  render() {
    return (
      <div>
        <Name />
        <Description />
        <Image />
        <AddFav />
      </div>
    )
  }
}

export default CharacterBasic;