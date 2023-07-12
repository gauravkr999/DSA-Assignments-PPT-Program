// Set up the React environment:

// Create a new React project by running npx create-react-app github-user-finder.
// Change to the project directory: cd github-user-finder.
// Start the development server: npm start.
// Install additional dependencies:

// Open a terminal and navigate to the project directory.

// Run the following command to install the necessary dependencies:

npm install axios


// Create a new component called UserFinder:

// In the src folder, create a new file called UserFinder.js.

// Add the following code to UserFinder.js:

import React, { useState } from 'react';
import axios from 'axios';

const UserFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Find User</button>
      </form>

      {userData && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.name}</h2>
        </div>
      )}
    </div>
  );
};

export default UserFinder;




// Update the App component:

// Open src/App.js.

// Replace the existing code with the following:


import React from 'react';
import UserFinder from './UserFinder';

const App = () => {
  return <UserFinder />;
};

export default App;




// Run the application:

// Save all the changes.
// In the terminal, run npm start if it's not already running.
// Open your browser and navigate to http://localhost:3000.
// You should see the GitHub User Finder application.
// The above code sets up a UserFinder component that allows users to enter a GitHub username. When the form is submitted, it makes an API request to retrieve the user's data using the GitHub API. If the request is successful, it displays the user's avatar and name.