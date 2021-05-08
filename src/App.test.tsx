import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input text box', () => {
  render(<App />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});
