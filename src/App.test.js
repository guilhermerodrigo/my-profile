import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders email for contact', () => {
  const { getByText } = render(<App />);
  const emailElement = getByText(/rodrigo.rn@hotmail.com.br/i);
  expect(emailElement).toBeInTheDocument();
});
