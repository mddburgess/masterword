import React from 'react';
import { render, screen } from './utils/test';
import App from './App';

test('renders input text box', () => {
  render(<App />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});
