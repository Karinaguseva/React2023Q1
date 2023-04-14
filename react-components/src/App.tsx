import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
import Root from './Root';
import './styles/style.css';

import ROUTES from 'types/routes';
import Forms from './pages/Forms/index';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={ROUTES.MAIN} element={<Root />}>
      <Route index element={<Main />}></Route>
      <Route path={ROUTES.ABOUT} element={<About />}></Route>
      <Route path={ROUTES.FORMS} element={<Forms />}></Route>
      <Route path="*" element={<NotFound404 />}></Route>
    </Route>
  )
);

const root = document.getElementById('root');

export const App = () => <RouterProvider router={router} />;

if (root)
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
