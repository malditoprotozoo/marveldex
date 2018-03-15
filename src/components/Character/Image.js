import React from 'react';
import PropTypes from 'prop-types';

const Image =( { characterImage, characterName } ) => (
  <div>
    <img src={characterImage} alt={characterName} />
  </div>
  )

export default Image;