import React from 'react';
import { screen, render } from '@testing-library/react';
import Forms from '.';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
describe('Forms', () => {
    it('renders Forms component', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(MemoryRouter, { initialEntries: ['/forms'] },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/forms", element: React.createElement(Forms, null) })))));
        expect(screen.getByText(/Name/)).toBeInTheDocument();
    });
});
