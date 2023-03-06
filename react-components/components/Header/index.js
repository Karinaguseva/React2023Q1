import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from 'types/routes';
class Header extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavLink, { to: ROUTES.MAIN }, "Main"),
            React.createElement(NavLink, { to: ROUTES.ABOUT }, "About")));
    }
}
export default Header;
