import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Main from '.';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
global.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve([
        {
            cost: 400,
            description: 'The Thestral is a haunted, winged equine beast that is only visible to those who have seen death.',
            id: 9,
            image: 'https://github.com/Karinaguseva/api-for-react2023Q1/blob/main/images/Thestral.jpg?raw=true',
            ingredient: 'Thestral Hair',
            name: 'Thestral',
            prerequisite: 'Must complete main story quest "The Elf, the Nab-sack, and the Loom"',
        },
    ]),
}));
describe('Main', () => {
    it('main is render', async () => {
        render(React.createElement(MemoryRouter, { initialEntries: ['/'] },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Main, null) }))));
        await waitFor(async () => {
            const name = await screen.findByText('Thestral');
            expect(name).toBeInTheDocument();
        });
    });
});
