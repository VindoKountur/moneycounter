import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('testing my app', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/jumlah uang/i);
  expect(linkElement[0]).toBeInTheDocument();
});
