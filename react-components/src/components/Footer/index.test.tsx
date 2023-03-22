import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from '.';

describe('Header', () => {
  it('has all nessesary elements', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect((links[0] as HTMLAnchorElement).href).toBe('https://github.com/Karinaguseva');
    expect((links[1] as HTMLAnchorElement).href).toBe('https://rs.school/js/');
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });
});
