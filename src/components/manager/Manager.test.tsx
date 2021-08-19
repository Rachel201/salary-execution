import React from 'react';
import { render, screen } from '@testing-library/react';
import Manager from './Manager';

test('render the title  ', () => {
  render(<Manager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
