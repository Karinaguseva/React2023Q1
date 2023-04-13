import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Card', () => {
  it('render Card component', () => {
    const card = {
      id: 1,
      name: 'Puffskein',
      image:
        'https://github.com/Karinaguseva/api-for-react2023Q1/blob/main/images/Puffskein.jpg?raw=true',
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Card data={card} />}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
