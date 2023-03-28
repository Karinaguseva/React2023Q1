import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import ROUTES from './../../types/routes';

const NotFound404 = () => {
  return (
    <div className="error">
      <div className="error__text">
        <p>Page not found 404</p>
        Go to
        <NavLink to={ROUTES.MAIN} className="error__nav">
          Main
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound404;
