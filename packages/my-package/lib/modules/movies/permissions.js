import Users from 'meteor/vulcan:users';

const membersActions = [
  'movie.create',
];
Users.groups.members.can(membersActions);