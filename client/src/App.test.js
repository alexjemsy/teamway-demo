import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';

test('renders header text', () => {
  render(<MockedProvider>
    <App />
  </MockedProvider>);
  const linkElement = screen.getByText(/Test: Are you an introvert or an extrovert?/i);
  expect(linkElement).toBeInTheDocument();
});
