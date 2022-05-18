import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from '../App';

const middlewares = [logger, thunk];
const mockStore = configureStore(middlewares);

test('Test App Items 1', () => {
  const initialState = { cases: 12, continent: 'Asia', countries: ['India', 'Pakistan'] };
  const store = mockStore({ continentReducer: initialState });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/The World/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test App Items 2', () => {
  const initialState = { cases: 12, continent: 'Asia', countries: ['China', 'Japan'] };
  const store = mockStore({ continentReducer: initialState });
  const tree = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
