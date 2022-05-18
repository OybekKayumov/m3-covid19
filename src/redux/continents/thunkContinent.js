import { getContinentByNameAPI, getContinentsAPI } from '../../components/Continents/continentsAPI';
import { getContinentAction, getContinentsAction } from './actionContinents';

export const continentsThunk = () => async (dispatch) => {
  const continents = await getContinentsAPI();
  const validContinents = [];

  continents.forEach((continent) => {
    validContinents.push({
      cases: continent.cases,
      continent: continent.continent,
      countries: continent.countries,
    });
  });

  dispatch(getContinentsAction(validContinents));
};

export const continentThunk = (continentName) => async (dispatch) => {
  const continent = await getContinentByNameAPI(continentName);
  const validContinent = {
    cases: continent.cases,
    continent: continent.continent,
    countries: continent.countries,
  };

  dispatch(getContinentAction(validContinent));
};
