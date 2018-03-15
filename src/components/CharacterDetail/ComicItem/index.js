import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PublishOn from './PublishOn';
import Pages from './Pages';
import Synopsis from './Synopsis';
import Cover from './Cover';
import SeeMore from './SeeMore';
import './index.css';

class ComicItem extends Component {
  render() {
    return (
      <div>
        <Title />
        <PublishOn />
        <Pages />
        <Synopsis />
        <Cover />
        <SeeMore />
      </div>
    )
  }
}

export default ComicItem;