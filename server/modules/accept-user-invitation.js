let accept = ( options ) => {
  var userInvite = _getUserInvitation( options.token );
  var user   = _createUser( options );

  _addUserToRole( user, userInvite.role );
  _deleteUserInvite( userInvite._id );

  return user;
};

let _createUser = ( options ) => {
  var userId = Accounts.createUser( { username: options.username, email: options.email, password: options.password } );

  if ( userId ) {
    return userId;
  }
};

let _getUserInvitation = ( token ) => {
  var userInvitation = UserInvitations.findOne( { "token": token } );

  if ( userInvitation ) {
    return userInvitation;
  }
};

let _deleteUserInvite = ( userInvite ) => {
  UserInvitations.remove( { "_id": userInvite } );
};

let _addUserToRole = ( user, role ) => {
  Roles.setUserRoles( user, role );
};

Modules.server.acceptUserInvitation = accept;
