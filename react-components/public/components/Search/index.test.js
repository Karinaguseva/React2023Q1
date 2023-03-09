import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Search from '.';
describe('Search', () => {
    it('renders Search component', () => {
        render(React.createElement(Search, { search: "", setSearch: () => { } }));
        const search = screen.getByRole('searchbox');
        expect(search.className).toBe('view-control__search');
    });
    it('renders Search component with expected value', () => {
        const expectedValue = '123';
        const setSearch = (event) => {
            render(React.createElement(Search, { search: event.target.value, setSearch: setSearch }));
        };
        render(React.createElement(Search, { search: "", setSearch: setSearch }));
        const search = screen.getByRole('searchbox');
        fireEvent.change(search, { target: { value: expectedValue } });
        expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
    });
});
