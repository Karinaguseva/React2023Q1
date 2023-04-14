import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ModalWindow from '.';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
describe('ModalWindow', () => {
    it('render ModalWindow component', () => {
        const card = {
            id: 1,
            name: 'Puffskein',
            description: 'Puffskeins are round and fluffy beasts, soft enough to cuddle but tough enough to be thrown around. Puffskeins will eat almost anything, but their favorite meal is bogies. They are common household pets for wizarding families because they are easy to maintain.',
            ingredient: 'Puffskein Fur',
            prerequisite: 'Must complete main story quest "The Elf, the Nab-sack, and the Loom"',
            cost: 150,
            image: 'https://github.com/Karinaguseva/api-for-react2023Q1/blob/main/images/Puffskein.jpg?raw=true',
        };
        render(React.createElement(Provider, { store: store },
            React.createElement(MemoryRouter, { initialEntries: ['/'] },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(ModalWindow, null) })))));
        waitFor(async () => {
            const name = await screen.findByText(card.name);
            expect(name).toBeInTheDocument();
        });
    });
    it('render loader component before card render', () => {
        const { container } = render(React.createElement(Provider, { store: store },
            React.createElement(MemoryRouter, { initialEntries: ['/'] },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(ModalWindow, null) })))));
        const loader = container.getElementsByClassName('loader');
        expect(loader.length).toBe(1);
    });
});
