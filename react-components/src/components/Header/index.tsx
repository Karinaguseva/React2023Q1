import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './index.scss';

import ROUTES from 'types/routes';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Routes>
          <Route path="/" element="Main page" />
          <Route path="/about" element="About page" />
          <Route path="/forms" element="Forms page" />
        </Routes>
      </h1>
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
