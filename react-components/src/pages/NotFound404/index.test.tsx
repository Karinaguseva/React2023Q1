import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound404 from '.';

describe('NotFound404', () => {
  it('renders NotFound404 component', () => {
    render(<NotFound404 />);
    const route = screen.getByText(/404/);
    expect(route).toBeInTheDocument();
  });
});
