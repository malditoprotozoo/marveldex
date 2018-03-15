import React from 'react';
import PropTypes from 'prop-types';

const Name =( { characterName } ) => (
  <div>
    <p>{characterName}</p>
  </div>
  )

Name.propTypes= {
  characterName: PropTypes.string.isRequired,
}

export default Name;