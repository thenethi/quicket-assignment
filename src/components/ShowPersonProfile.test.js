import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import ShowPersonProfile from './ShowPersonProfile.js';

describe('ShowPersonProfile component', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    render(<ShowPersonProfile onSubmit={mockSubmit} />);
  });

  it('renders profile form with all input fields', () => {
    expect(screen.getByText('Profile Form')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Middle Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Primary Phone:')).toBeInTheDocument();
    expect(screen.getByLabelText('Primary Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Home Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Office Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook Profile:')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn Profile:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates form state on input change', () => {
    const firstNameInput = screen.getByLabelText('First Name:');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  it('submits form with correct data', () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Primary Phone:'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Primary Email:'), { target: { value: 'john.doe@example.com' } });

    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      primaryPhone: '1234567890',
      primaryEmail: 'john.doe@example.com',
      homeAddress: '',
      officeAddress: '',
      facebookProfile: '',
      linkedInProfile: ''
    });

    expect(screen.getByLabelText('First Name:').value).toBe('');
    expect(screen.getByLabelText('Last Name:').value).toBe('');
    expect(screen.getByLabelText('Primary Phone:').value).toBe('');
    expect(screen.getByLabelText('Primary Email:').value).toBe('');
  });
});
