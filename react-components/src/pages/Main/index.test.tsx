import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Main from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Main', () => {
  it('main is render', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    await waitFor(async () => {
      const name = await screen.findByText('Thestral');
      expect(name).toBeInTheDocument();
    });
  });
});
