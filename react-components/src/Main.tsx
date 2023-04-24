import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/store';
import './index.scss';

const rootElement = document.getElementById('root');

if (rootElement)
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );

// ReactDOM.hydrateRoot(
//   document.getElementById('root') as HTMLElement,
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );
