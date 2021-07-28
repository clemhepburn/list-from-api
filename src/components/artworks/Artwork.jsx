import React from 'react';
import PropTypes from 'prop-types';

const Artwork = ({ title, artist, date, image }) => (
  <div>
    <img src={image} alt={title} />
    <div>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{date}</p>
    </div>
  </div>
);

Artwork.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artwork;
