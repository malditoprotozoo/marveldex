import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const SeeMore =( { charUrl } ) => (
  <span>
    <a src={charUrl} target='_blank'> See More <FaPlus /> </a>
  </span>
  )


export default SeeMore;