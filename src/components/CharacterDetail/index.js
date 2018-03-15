import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicListItem from './ComicItemList';
import ComicItem from './ComicItem';
import CharacterBasic from './CharacterBasic';
import './index.css';

class CharacterDetail extends Component {
  render() {
    return (
      <div>
        <CharacterBasic />
        <ComicItemList />
      </div>
    )
  }
}



export default CharacterDetail;