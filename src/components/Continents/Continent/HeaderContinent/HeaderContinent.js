import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import imgContinents from '../../continentsImgsData';
import { continentThunk } from '../../../../redux/continents/thunkContinent';
import classes from './HeaderContinent.module.css';

const HeaderContinent = () => {
  const { continentName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(continentThunk(continentName));
  }, []);

  const { cases, continent } = useSelector((state) => state.continentReducer);

  return (
    <header>
      <div className={classes.header}>
        <img
          src={imgContinents[continent]}
          alt="continent img"
          className={classes.image}
        />
        <div className={classes.textContent}>
          <h2>{continent}</h2>
          <p>{cases}</p>
        </div>
      </div>
      <div className={classes.breaker}>{`STATUS OF ${continent?.toUpperCase()}'S COUNTRIES`}</div>
    </header>
  );
};

export default HeaderContinent;
