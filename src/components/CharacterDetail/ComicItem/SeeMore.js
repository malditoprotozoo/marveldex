import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import FaPlus from 'react-icons/lib/fa/plus';

const SeeMore =( { comicUrl } ) => (
  <span>
    <a src={comicUrl} target='_blank' className='see-more-btn'><FaPlus /> </a>
  </span>
  )


export default SeeMore;