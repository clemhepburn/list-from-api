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
      artist_title: PropTypes.string.isRequired,
      date_display: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArtworkList;

