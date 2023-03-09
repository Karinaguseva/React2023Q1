import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from '.';
import addRouter from '../../tests/addRouter';
describe('Header', () => {
    it('has correct navigation links', () => {
        render(addRouter(React.createElement(Header, null)));
        const links = screen.getAllByRole('link');
        expect(links[0].href).toBe('http://localhost:3000/#/');
        expect(links[1].href).toBe('http://localhost:3000/#/about');
        expect(links[0].className).toBe('header__nav header__nav--active');
        expect(links[1].className).toBe('header__nav');
    });
});
