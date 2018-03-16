import React from 'react';
import PropTypes from 'prop-types';


const Image = ( { charImage, charName } ) => (
  <img src={charImage} alt={charName} />
)


export default Image;