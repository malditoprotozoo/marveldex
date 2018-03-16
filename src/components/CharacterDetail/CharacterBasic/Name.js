import React from 'react';
import PropTypes from 'prop-types';


const Name =( { charName } ) => (
  <div className='char-name'>
    <span>{charName}</span>
    <div className='paralel'></div>
  </div>
  )


export default Name;