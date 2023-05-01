import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';

function entryClient(store: Store) {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as Element,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient(store);
