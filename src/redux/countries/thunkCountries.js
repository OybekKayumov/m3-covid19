import baseCountriesAPINames from '../../components/Countries/countriesAPI';
import { getCountriesAction } from './actionCountries';

const countriesThunk = (countriesNames) => async (dispatch) => {
  const countries = await baseCountriesAPINames(countriesNames);

  const validCountries = [];
  countries.forEach((country) => {
    validCountries.push({
      country: country.country,
      cases: country.cases,
      flag: country.countryInfo.flag,
    });
  });

  dispatch(getCountriesAction(validCountries));
};

export default countriesThunk;
