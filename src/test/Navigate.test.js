import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar/Navigate';

test('Navbar Items', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );
  const linkElement = screen.getByText(/COVID/i);
  expect(linkElement).toBeInTheDocument();
});

test('Navbar Tree', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
