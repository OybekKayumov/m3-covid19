import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Country.module.css';

const Country = ({ countryDate }) => {
  const { country, cases, flag } = countryDate;

  return (
    <div className={classes.countryContainer}>
      <img src={flag} alt={`${country}'s Img`} className={classes.img} />
      <p className={classes.countryName}>{country}</p>
      <p className={classes.cases}>{cases}</p>
      <FontAwesomeIcon icon={faArrowCircleRight} className={classes.icon} />
    </div>
  );
};

Country.propTypes = {
  countryDate: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
