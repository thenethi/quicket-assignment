import React, { useState } from 'react';
import ShowPersonProfile from './components/ShowPersonProfile';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const handleSubmit = (formData) => {
    setProfiles([...profiles, formData]);
  };

  return (
    <div className="App">
      <ShowPersonProfile onSubmit={handleSubmit} />
      {profiles.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Primary Phone</th>
              <th>Primary Email</th>
              <th>Home Address</th>
              <th>Office Address</th>
              <th>Facebook Profile</th>
              <th>LinkedIn Profile</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={index}>
                <td>{profile.firstName}</td>
                <td>{profile.middleName}</td>
                <td>{profile.lastName}</td>
                <td>{profile.primaryPhone}</td>
                <td>{profile.primaryEmail}</td>
                <td>{profile.homeAddress}</td>
                <td>{profile.officeAddress}</td>
                <td>{profile.facebookProfile}</td>
                <td>{profile.linkedInProfile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
