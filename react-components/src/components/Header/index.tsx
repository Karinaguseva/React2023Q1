import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

import ROUTES from 'types/routes';

class Header extends Component {
  render() {
    return (
      <header className="header">
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
