import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRoutesFromElements, Route, createHashRouter, } from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
import Root from './Root';
import ROUTES from 'types/routes';
const router = createHashRouter(createRoutesFromElements(React.createElement(Route, { path: ROUTES.MAIN, element: React.createElement(Root, null), errorElement: React.createElement(NotFound404, null) },
    React.createElement(Route, { errorElement: React.createElement(NotFound404, null) },
        React.createElement(Route, { path: ROUTES.MAIN, element: React.createElement(Main, null) }),
        React.createElement(Route, { path: ROUTES.ABOUT, element: React.createElement(About, null) })))));
const root = document.getElementById('root');
if (root)
    ReactDOM.createRoot(root).render(React.createElement(RouterProvider, { router: router }));
