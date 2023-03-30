import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import ROUTES from './../../types/routes';
const NotFound404 = () => {
    return (React.createElement("div", { className: "error" },
        React.createElement("div", { className: "error__text" },
            React.createElement("p", null, "Page not found 404"),
            "Go to",
            React.createElement(NavLink, { to: ROUTES.MAIN, className: "error__nav" }, "Main"))));
};
export default NotFound404;
