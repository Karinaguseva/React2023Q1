import React from 'react';
import 'jsdom-worker';
import { screen, render } from '@testing-library/react';
import CardForm from '.';

describe('CardForm', () => {
  it('renders Forms component', () => {
    render(<CardForm cards={[]} />);
    const text = screen.getByText('Cards not found');
    expect(text).toBeInTheDocument();
  });

  it('renders CardForm component with expected value', () => {
    const image = new File(['test'], 'test.png', { type: 'image/png' });
    const file = URL.createObjectURL(image);
    const expectedValue = [
      {
        id: 0,
        image: file,
        name: 'Fluffy',
        date: '21.12.1994',
        description: 'very long description',
        ingredient: 'fur',
        cost: '1000',
        house: 'Gryffindor',
      },
    ];
    render(<CardForm cards={expectedValue} />);
    const text = screen.getByText(expectedValue[0].name);
    expect(text).toBeInTheDocument();
  });
});
