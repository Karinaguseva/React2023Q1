import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '.';

describe('About', () => {
  it('renders About component', () => {
    render(<About />);
    const route = screen.getByText('About');
    expect(route.className).toBe('about');
  });
});
