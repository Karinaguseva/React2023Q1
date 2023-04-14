import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { App } from './App';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('App', () => {
  it('renders Forms component on navigate', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = screen.getByText(/Main page/i);
    expect(main).toBeInTheDocument();
    const link = screen.getByText('Forms');
    const user = userEvent.setup();
    await user.click(link);

    waitFor(async () => {
      const forms = await screen.findByText(/Forms page/i);
      expect(forms).toBeInTheDocument();
    });
  });
});
