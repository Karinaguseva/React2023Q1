import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalWindow from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Card', () => {
  it('render Card component', () => {
    const card = {
      id: 1,
      name: 'Puffskein',
      description:
        'Puffskeins are round and fluffy beasts, soft enough to cuddle but tough enough to be thrown around. Puffskeins will eat almost anything, but their favorite meal is bogies. They are common household pets for wizarding families because they are easy to maintain.',
      ingredient: 'Puffskein Fur',
      prerequisite: 'Must complete main story quest "The Elf, the Nab-sack, and the Loom"',
      cost: 150,
      image:
        'https://github.com/Karinaguseva/api-for-react2023Q1/blob/main/images/Puffskein.jpg?raw=true',
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ModalWindow data={card} loading={false} />}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(card.name)).toBeInTheDocument();
  });
});
