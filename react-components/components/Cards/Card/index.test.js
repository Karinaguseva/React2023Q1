import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
describe('Cards', () => {
    it('render cards', () => {
        render(React.createElement(Card, { data: {
                id: 0,
                name: 'Puffskein',
                description: 'Puffskeins are round and fluffy beasts, soft enough to cuddle but tough enough to be thrown around. Puffskeins will eat almost anything, but their favorite meal is bogies. They are common household pets for wizarding families because they are easy to maintain.',
                ingredient: 'Puffskein Fur',
                prerequisite: 'Must complete main story quest "The Elf, the Nab-sack, and the Loom"',
                cost: 150,
                image: 'images/Puffskein.jpg',
            } }));
        expect(screen.getByText('Puffskein')).toBeInTheDocument();
    });
});
