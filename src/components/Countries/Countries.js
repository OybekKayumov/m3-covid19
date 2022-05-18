import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import countriesThunk from '../../redux/countries/thunkCountries';
import Country from './Country/Country';

const Countries = () => {
  const { countries } = useSelector((state) => state.continentReducer);
  const countriesString = countries?.toString();

  const dispatch = useDispatch();
  useEffect(() => {
    if (countriesString) {
      dispatch(countriesThunk(countriesString));
    }
  }, [countriesString]);

  const countriesData = useSelector((state) => state.countriesReducer);

  return (
    <section>
      {countriesData.map((country) => (<Country key={country.country} countryDate={country} />))}
    </section>
  );
};

export default Countries;
