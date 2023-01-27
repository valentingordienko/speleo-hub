import React from 'react';
import { render, screen } from '@testing-library/react';
import { BaseLayout } from './BaseLayout';

test('renders learn react Link', () => {
  render(<BaseLayout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
