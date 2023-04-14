import React from 'react';
import { screen, render } from '@testing-library/react';
import Forms from '.';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Forms', () => {
  it('renders Forms component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <Routes>
            <Route path="/forms" element={<Forms />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Name/)).toBeInTheDocument();
  });
});
