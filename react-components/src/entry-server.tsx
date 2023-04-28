import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { store } from './store/store';
import { App } from './App';

export const render = (url: string, options: RenderToPipeableStreamOptions) => {
  return ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};
