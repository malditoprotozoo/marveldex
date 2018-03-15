import React from 'react';
import PropTypes from 'prop-types';

const Image =( { characterImage, characterName } ) => (
  <div>
    <img src={characterImage} alt={characterName} />
  </div>
  )


Image.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
}

export default Image;