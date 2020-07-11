import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('Cek nama aplikasi di header', () => {
  render(<Header />);
  const namaApk = screen.getByText(/money counter/i);
  expect(namaApk).toBeInTheDocument();
});
