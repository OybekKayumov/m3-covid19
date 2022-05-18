import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { continentsThunk } from '../../redux/continents/thunkContinent';
import Continent from './Continent/Continent';
import classes from './Continents.module.css';

const Continents = () => {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(continentsThunk());
  }, []);

  const continents = useSelector((state) => state.continentsReducer);

  useEffect(() => {
    setSearch(continents);
  }, [continents]);

  const SearchHandler = (e) => {
    setSearch(
      continents.filter((c) => c.continent.toLowerCase().includes(e.target.value)),
    );
  };

  return (
    <>
      <div className={classes.breaker}>
        <p>CASES BY CONTINENTS</p>
        <input type="text" placeholder="Search" onChange={SearchHandler} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {search?.map((continent) => (
          <Continent key={continent.continent} continentData={continent} />
        ))}
      </div>
    </>
  );
};

export default Continents;
