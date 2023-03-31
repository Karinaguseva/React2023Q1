import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.scss';
import ROUTES from 'types/routes';
const Header = () => {
    let pageTitle = '';
    const location = useLocation();
    switch (location.pathname) {
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
    return (React.createElement("header", { className: "header" },
        React.createElement("h1", { className: "header__title" }, pageTitle),
        React.createElement(NavLink, { to: ROUTES.MAIN, className: ({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '') }, "Main"),
        React.createElement(NavLink, { to: ROUTES.ABOUT, className: ({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '') }, "About"),
        React.createElement(NavLink, { to: ROUTES.FORMS, className: ({ isActive }) => 'header__nav' + (isActive ? ' header__nav--active' : '') }, "Forms")));
};
export default Header;
