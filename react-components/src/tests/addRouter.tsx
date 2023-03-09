import React from 'react';
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from 'react-router-dom';

export default (Element: React.ReactNode) => {
  const router = createHashRouter(
    createRoutesFromElements(<Route path="/" element={Element}></Route>)
  );

  return <RouterProvider router={router} />;
};
