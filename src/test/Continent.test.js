import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Continents from '../components/Continents/Continents';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const continentsAction = () => ({ type: 'GET_CONTINENTS' });

function continentsThunk() {
  return (dispatch) => Promise.resolve(dispatch(continentsAction()));
}

test('Continents Tree', () => {
  const store = mockStore();
  store.dispatch(continentsThunk())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(continentsAction());
    });
});

test('Continents Tree', () => {
  const initialState = [{ cases: 12, continent: 'Asia', countries: ['S.Korea', 'Nepal'] }];
  const store = mockStore(initialState);

  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Continents />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
