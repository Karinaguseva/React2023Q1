import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
import './styles/style.css';

import ROUTES from 'types/routes';
import Forms from './pages/Forms/index';
import Root from './Root';

export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Root />}>
          <Route index element={<Main />}></Route>
          <Route path={ROUTES.ABOUT} element={<About />}></Route>
          <Route path={ROUTES.FORMS} element={<Forms />}></Route>
          <Route path="*" element={<NotFound404 />}></Route>
        </Route>
      </Routes>
    </>
  );
};
