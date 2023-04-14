import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Search from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

describe('Search', () => {
  describe('Search', () => {
    it('renders Search component', () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<Search />}></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      );
      const search = screen.getByRole('textbox');
      expect(search.className).toBe('search__input');
    });
  });

  it('renders Search component with expected value', () => {
    const expectedValue = '123';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Search />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const search = screen.getByRole('textbox');
    fireEvent.change(search, { target: { value: expectedValue } });
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });
});
