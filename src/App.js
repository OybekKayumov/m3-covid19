import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContinent from './components/Continents/Continent/HeaderContinent/HeaderContinent';
import Continents from './components/Continents/Continents';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navigate';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Header />
              <Continents />
            </>
          )}
        />
        <Route
          path="/:continentName"
          element={(
            <>
              <HeaderContinent />
              <Countries />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
