import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Main from '../../pages/Main';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Cards', () => {
  it('show cards after render', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </MemoryRouter>
      );
    });
    let someCard = screen.queryByText(/Puffskein/);
    expect(someCard).toBe(null);
    someCard = await screen.findByText(/Puffskein/);
    expect(someCard).toBeInTheDocument();
  });
});
