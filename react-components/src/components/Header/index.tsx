import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.scss';

import ROUTES from 'types/routes';

const Header = () => {
  let pageTitle = '';
  const location = useLocation();
  switch (location.pathname as ROUTES) {
    case ROUTES.ABOUT:
      pageTitle = 'About page';
      break;
    case ROUTES.MAIN:
      pageTitle = 'Main page';
      break;
    case ROUTES.FORMS:
      pageTitle = 'Forms page';
      break;

    default:
      pageTitle = 'NotFound404 page';
  }

  return (
    <header className="header">
      <h1 className="header__title">{pageTitle}</h1>
      <NavLink
        to={ROUTES.MAIN}
        className={({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '')}
      >
        Main
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '')}
      >
        About
      </NavLink>
      <NavLink
        to={ROUTES.FORMS}
        className={({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '')}
      >
        Forms
      </NavLink>
    </header>
  );
};

export default Header;
