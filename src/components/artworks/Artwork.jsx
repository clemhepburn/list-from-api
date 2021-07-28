import React from 'react';
import PropTypes from 'prop-types';
import e from 'express';

const Artwork = ({ title, artist, date, image }) => (
  <div className="artwork">
    <img src={image} alt={title} />
    <div className="artwork-info">
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
