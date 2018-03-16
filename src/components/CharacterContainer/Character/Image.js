import React from 'react';
import PropTypes from 'prop-types';

const Image =( { characterImage, characterName } ) => (
  <div className="image-container">
    <a href={`/${characterName.replace(' ', '-')}/`}><img src={characterImage} alt={characterName} /></a>
  </div>
  )


Image.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
}

export default Image;