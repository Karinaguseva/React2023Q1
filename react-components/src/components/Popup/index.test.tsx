import React from 'react';
import { screen, render } from '@testing-library/react';
import Popup from '.';

describe('Popup', () => {
  it('has all nessesary elements', () => {
    render(<Popup showPopup={true} />);
    expect(screen.getByText(/Beast card created/)).toBeInTheDocument();
  });
});
