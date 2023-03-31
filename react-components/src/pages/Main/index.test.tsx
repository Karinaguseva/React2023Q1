import React from 'react';
import { screen, render } from '@testing-library/react';
import Main from '.';

describe('Main', () => {
  it('main is render', () => {
    render(<Main />);
    const route = screen.getByRole('main');
    expect(route.className).toBe('main');
  });
});
