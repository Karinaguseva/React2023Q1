import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Main from '../..';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
describe('Cards', () => {
    it('show cards after render', async () => {
        await act(async () => {
            render(React.createElement(MemoryRouter, { initialEntries: ['/'] },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Main, null) }))));
        });
        let someCard = screen.queryByText(/Puffskein/);
        expect(someCard).toBe(null);
        someCard = await screen.findByText(/Puffskein/);
        expect(someCard).toBeInTheDocument();
    });
});
