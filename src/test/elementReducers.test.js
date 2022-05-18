import countriesReducer from '../redux/countries/reducerCountries';
import { continentsReducer, continentReducer } from '../redux/continents/reducerContinent';
import { GET_CONTINENT, GET_CONTINENTS } from '../redux/continents/actionContinents';
import { GET_COUNTRIES } from '../redux/countries/actionCountries';

describe('my Reducers', () => {
  test('continentsReducer', () => {
    expect(continentsReducer([], { type: GET_CONTINENTS, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });

  test('continentReducer 1', () => {
    expect(continentReducer({}, { type: GET_CONTINENT, payload: { dat: 1 } })).toEqual({ dat: 1 });
  });

  test('countriesReducer 2', () => {
    expect(countriesReducer([], { type: GET_COUNTRIES, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});
