import React from 'react';
import PropTypes from 'prop-types';
import FaCalendar from 'react-icons/lib/fa/calendar';

const PublishOn =( { comicDate } ) => (
  <span className='sub-info'>
    <FaCalendar /> Published: {comicDate}
  </span>
  )


export default PublishOn;