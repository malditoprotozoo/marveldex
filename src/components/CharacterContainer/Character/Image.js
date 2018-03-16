import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Image =( { characterImage, characterName } ) => (
  <div className="image-container">
    <Link to={`/character/${characterName.replace(' ', '-')}/`}><img src={characterImage} alt={characterName} /></Link>
  </div>
  )


Image.propTypes = {
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
}

export default Image;