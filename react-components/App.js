import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRoutesFromElements, Route, createHashRouter, } from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
import Root from './Root';
import './styles/style.css';
import ROUTES from 'types/routes';
import Forms from './pages/Forms/index';
const router = createHashRouter(createRoutesFromElements(React.createElement(Route, { path: ROUTES.MAIN, element: React.createElement(Root, null) },
    React.createElement(Route, { index: true, element: React.createElement(Main, null) }),
    React.createElement(Route, { path: ROUTES.ABOUT, element: React.createElement(About, null) }),
    React.createElement(Route, { path: ROUTES.FORMS, element: React.createElement(Forms, null) }),
    React.createElement(Route, { path: "*", element: React.createElement(NotFound404, null) }))));
const root = document.getElementById('root');
export const App = () => React.createElement(RouterProvider, { router: router });
if (root)
    ReactDOM.createRoot(root).render(React.createElement(App, null));
