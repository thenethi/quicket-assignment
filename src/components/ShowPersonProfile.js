import React, { useState } from 'react';
import './ShowPersonProfile.css'

const ShowPersonProfile = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    primaryPhone: '',
    primaryEmail: '',
    homeAddress: '',
    officeAddress: '',
    facebookProfile: '',
    linkedInProfile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      primaryPhone: '',
      primaryEmail: '',
      homeAddress: '',
      officeAddress: '',
      facebookProfile: '',
      linkedInProfile: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="primaryPhone">Primary Phone:</label>
          <input
            type="tel"
            id="primaryPhone"
            name="primaryPhone"
            value={formData.primaryPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="primaryEmail">Primary Email:</label>
          <input
            type="email"
            id="primaryEmail"
            name="primaryEmail"
            value={formData.primaryEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="homeAddress">Home Address:</label>
          <input
            type="text"
            id="homeAddress"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="officeAddress">Office Address:</label>
          <input
            type="text"
            id="officeAddress"
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="facebookProfile">Facebook Profile:</label>
          <input
            type="text"
            id="facebookProfile"
            name="facebookProfile"
            value={formData.facebookProfile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedInProfile">LinkedIn Profile:</label>
          <input
            type="text"
            id="linkedInProfile"
            name="linkedInProfile"
            value={formData.linkedInProfile}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShowPersonProfile;
