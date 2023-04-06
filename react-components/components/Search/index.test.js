"use strict";
// import React from 'react';
// import { screen, render, fireEvent } from '@testing-library/react';
// import Search from '.';
// describe('Search', () => {
//   it('renders Search component', () => {
//     render(<Search search="" setSearch={() => {}} />);
//     const search = screen.getByRole('searchbox');
//     expect(search.className).toBe('search__input');
//   });
//   it('renders Search component with expected value', () => {
//     const expectedValue = '123';
//     const setSearch = (event: { target: { value: string } }) => {
//       render(<Search search={event.target.value} setSearch={setSearch} />);
//     };
//     render(<Search search="" setSearch={setSearch} />);
//     const search = screen.getByRole('searchbox');
//     fireEvent.change(search, { target: { value: expectedValue } });
//     expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
//   });
// });
