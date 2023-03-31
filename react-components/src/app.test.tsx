import React from 'react';
import { screen, render } from '@testing-library/react';
import { App } from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('renders Forms component on navigate', async () => {
    render(<App />);
    const main = screen.getByText(/Main page/i);
    expect(main).toBeInTheDocument();
    const link = screen.getByText('Forms');
    const user = userEvent.setup();
    await user.click(link);
    const forms = screen.getByText(/Forms page/i);
    expect(forms).toBeInTheDocument();
  });
});
