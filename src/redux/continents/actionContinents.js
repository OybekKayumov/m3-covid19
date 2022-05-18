export const GET_CONTINENTS = 'GET_CONTINENTS';
export const GET_CONTINENT = 'GET_CONTINENT';

export const getContinentsAction = (payload) => ({ type: GET_CONTINENTS, payload });

export const getContinentAction = (payload) => ({ type: GET_CONTINENT, payload });
