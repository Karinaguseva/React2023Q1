import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from '.';
describe('Header', () => {
    it('has all nessesary elements', () => {
        render(React.createElement(Footer, null));
        const links = screen.getAllByRole('link');
        expect(links[0].href).toBe('https://github.com/Karinaguseva');
        expect(links[1].href).toBe('https://rs.school/js/');
        expect(screen.getByText(/2023/)).toBeInTheDocument();
    });
});
