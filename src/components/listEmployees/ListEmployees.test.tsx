import React from 'react';
import { render, screen } from '@testing-library/react';
import  ListEmployees from './ListEmployees';

test('render the title  ', () => {
  render(<ListEmployees/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
