import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import classes from './Navigate.module.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { continent } = useSelector((state) => state.continentReducer);

  return (
    <nav className={classes.nav}>
      {location.pathname === '/' && (
        <>
          <p>
            <b>The World</b>
          </p>
          <p className={classes.shrink}>Continents COVID Cases</p>
        </>
      )}

      {location.pathname !== '/' && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />
          <p>
            <b>{continent}</b>
          </p>
          <p className={classes.shrink}>{`${continent} COVID Cases`}</p>
        </>
      )}

      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faCog} />
    </nav>
  );
}

export default Navbar;
