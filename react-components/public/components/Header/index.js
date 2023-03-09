import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import ROUTES from 'types/routes';
class Header extends Component {
    render() {
        return (React.createElement("header", { className: "header" },
            React.createElement(NavLink, { to: ROUTES.MAIN, className: ({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '') }, "Main"),
            React.createElement(NavLink, { to: ROUTES.ABOUT, className: ({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '') }, "About")));
    }
}
export default Header;
