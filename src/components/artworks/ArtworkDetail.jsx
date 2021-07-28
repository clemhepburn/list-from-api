/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ArtworkDetail = ({ title, artist_title, date_display, medium_display, department_title }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{artist_title}</h3>
      <h4>{date_display}</h4>
      <h4>{medium_display}</h4>
      <h4>{department_title}</h4>
    </>
  );
};

ArtworkDetail.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  artist_title: PropTypes.string,
  date_display: PropTypes.string.isRequired,
  medium_display: PropTypes.string.isRequired,
  department_title: PropTypes.string.isRequired,
};

export default ArtworkDetail;
