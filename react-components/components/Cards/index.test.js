import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Main from '../../pages/Main';
describe('Cards', () => {
    it('show cards after render', async () => {
        await act(async () => {
            render(React.createElement(Main, null));
        });
        let someCard = screen.queryByText(/colourful/);
        expect(someCard).toBe(null);
        someCard = await screen.findByText(/colourful/);
        expect(someCard).toBeInTheDocument();
    });
});
