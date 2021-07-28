import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artwork = ({ title, artist_title, date_display, id }) => (


  <Link to={`/${id}`}>
    <div>
      <h2>{title}</h2>
      <div>
        <p>{artist_title}</p>
        <p>{date_display}</p>
      </div>
    </div>
  </Link>


);

Artwork.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist_title: PropTypes.string,
  date_display: PropTypes.string,
};

export default Artwork;
