import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { continentsReducer, continentReducer } from './continents/reducerContinent';
import countriesReducer from './countries/reducerCountries';

const reducer = combineReducers({
  continentsReducer,
  continentReducer,
  countriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
