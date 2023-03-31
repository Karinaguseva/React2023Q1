import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import FormData from '.';

describe('FormData', () => {
  it('renders Forms component', () => {
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Beast Name');
    expect(name.className).toBe('forms__input name');
  });

  it('renders FormData component with expected value', () => {
    const expectedValue = 'Crimson';
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Beast Name');
    fireEvent.change(name, { target: { value: expectedValue } });
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });
});
