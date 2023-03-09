import React from 'react';
import { RouterProvider, createRoutesFromElements, Route, createHashRouter, } from 'react-router-dom';
export default (Element) => {
    const router = createHashRouter(createRoutesFromElements(React.createElement(Route, { path: "/", element: Element })));
    return React.createElement(RouterProvider, { router: router });
};
