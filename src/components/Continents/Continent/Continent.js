import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Continent.module.css';
import imgContinents from '../continentsImgsData';

/* eslint-disable react/prop-types */
const Continent = ({ continentData }) => {
  const navigate = useNavigate();
  const { cases, continent } = continentData;

  return (
    <button
      className={classes.continent}
      onClick={() => {
        navigate(`/${continent}`);
      }}
      type="button"
    >
      <FontAwesomeIcon icon={faArrowCircleRight} className={classes.icon} />

      <div className={classes.container}>
        <img
          src={imgContinents[continent]}
          alt="continent pic"
          className={classes.img}
        />
        <div>
          <h3>{continent}</h3>
          <p>{`Cases : ${cases}`}</p>
        </div>
      </div>
    </button>
  );
};

Continent.protoTypes = {
  continentData: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    continent: PropTypes.string.isRequired,
  }).isRequired,
};

export default Continent;
