// iterar en la data de personajes y aplicar ComicItem en cada iteración
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItem from './ComicItem';
import './index.css';

const ComicItemList = function({comicTitle}) {
  return (
    <div className='comic-item-list'>
      <ComicItem comicTitle={comicTitle}/>
    </div>
  );
}
// class ComicItemList extends Component {
//   render() {
//     return (
//       <div className='comic-item-list'>
//         <ComicItem/>
//       </div>
//     )
//   }
// }


export default ComicItemList;