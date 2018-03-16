import React from 'react';
import PropTypes from 'prop-types';


const Cover =( { comicImage, comicTitle } ) => (
  <img src={comicImage} alt={comicTitle} />
)


export default Cover;