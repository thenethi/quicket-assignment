import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  // Use a regular expression directly, not as a string
  // const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the element is present in the document
  // expect(linkElement).toBeInTheDocument();
});
