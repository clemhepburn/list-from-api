import React from 'react';
import PropTypes from 'prop-types';

const Artwork = ({ title, artist_title, date_display }) => (
  <div>
    <h2>{title}</h2>
    <div>
      <p>{artist_title}</p>
      <p>{date_display}</p>
    </div>
  </div>
);

Artwork.propTypes = {
  title: PropTypes.string.isRequired,
  artist_title: PropTypes.string.isRequired,
  date_display: PropTypes.string.isRequired,
};

export default Artwork;
