import React from 'react';
import PropTypes from 'prop-types';

const Image =( { characterImage, characterName } ) => (
  <div className="image-container">
    <img src={characterImage} alt={characterName} />
  </div>
  )


Image.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
}

export default Image;