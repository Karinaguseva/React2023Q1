import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Main from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
describe('Main', () => {
    it('main is render', async () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(MemoryRouter, { initialEntries: ['/'] },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Main, null) })))));
        await waitFor(async () => {
            const name = await screen.findByText('Thestral');
            expect(name).toBeInTheDocument();
        });
    });
});
