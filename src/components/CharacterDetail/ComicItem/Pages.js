import React from 'react';
import PropTypes from 'prop-types';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';

const Pages =( { comicPages } ) => (
  <span>
    <FaFileTextO /> {comicPages}
  </span>
  )


export default Pages;