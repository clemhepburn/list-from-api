/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './ArtworkDetail.css';

const ArtworkDetail = ({ title, artist_title, date_display, medium_display, department_title }) => {
  return (
    <>
      <section className="artwork-detail">
        <h2 className="artwork-title">{title}</h2>
        <h3 className="artist-title">{artist_title}</h3>
        <h4 className="date-display">{date_display}</h4>
        <h4 className="medium-display">{medium_display}</h4>
        <h4 className="department-title">{department_title}</h4>
      </section>
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
