import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

test('Cek email di footer', () => {
  render(<Footer />);
  const myEmail = screen.getByText(/vindokountur@gmail.com/i);
  expect(myEmail).toBeInTheDocument();
});
