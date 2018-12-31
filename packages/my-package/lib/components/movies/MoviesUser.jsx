import React from 'react';
import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
const MoviesUsers = ({ currentUser }) => (
  <div className="movies-users">
    
    <div>
      {currentUser && <p>Welcome, {currentUser.displayName} {currentUser.isAdmin && `(admin)`}</p>}
      <Components.AccountsLoginForm redirect={false} /> 
    </div>
   
  </div>
);

registerComponent({ name: 'MoviesUsers', component: MoviesUsers, hocs: [withCurrentUser] });