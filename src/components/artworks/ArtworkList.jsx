import React from 'react';
import PropTypes from 'prop-types';
import Artwork from './Artwork';

const ArtworkList = ({ artworks }) => {
  const artworkElements = artworks.map((artwork) => (
    <li key={artwork.id}>
      <Artwork
        {...artwork}
      />
    </li>
  ));

  return <ul>{artworkElements}</ul>;
};

ArtworkList.propTypes = {
  artworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtworkList;

