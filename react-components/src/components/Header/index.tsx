import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './index.scss';

import ROUTES from 'types/routes';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">
          <Routes>
            <Route path="/" element="Main page" />
            <Route path="/about" element="About page" />
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
      </header>
    );
  }
}

export default Header;
