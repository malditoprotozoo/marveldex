// iterar en la data de personajes y aplicar ComicItem en cada iteración
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItem from './ComicItem';
import './index.css';

class ComicItemList extends Component {
  render() {
    return (
      <div>
        <ComicItem/>
      </div>
    )
  }
}


export Default ComicItemList;