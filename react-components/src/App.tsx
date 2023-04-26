import React from 'react';
// import ReactDOM from 'react-dom/client';
import {
  // BrowserRouter,
  // RouterProvider,
  // createRoutesFromElements,
  Route,
  // createHashRouter,
  Routes,
} from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
// import Root from './Root';
import './styles/style.css';

import ROUTES from 'types/routes';
import Forms from './pages/Forms/index';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';

// const router = createHashRouter(
//   createRoutesFromElements(
//     <Route path={ROUTES.MAIN} element={<Root />}>
//       <Route index element={<Main />}></Route>
//       <Route path={ROUTES.ABOUT} element={<About />}></Route>
//       <Route path={ROUTES.FORMS} element={<Forms />}></Route>
//       <Route path="*" element={<NotFound404 />}></Route>
//     </Route>
//   )
// );

// export const App = () => <RouterProvider router={router} />;

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path={ROUTES.MAIN} element={<Root />}> */}
        <Route index element={<Main />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.FORMS} element={<Forms />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
};

// const root = document.getElementById('root') as HTMLElement;

// if (root)
//   ReactDOM.createRoot(root).render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

// ReactDOM.hydrateRoot(
//   document.getElementById('root') as HTMLElement,
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );
