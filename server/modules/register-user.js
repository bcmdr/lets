let register = ( options ) => {
  var user = _createUser( options );

  _addUserToRole( user, 'viewer');

  return user;
};

let _createUser = ( options ) => {
  var userId = Accounts.createUser( { username: options.username, email: options.email, password: options.password } );

  if ( userId ) {
    return userId;
  }
};

let _addUserToRole = ( user, role ) => {
  Roles.setUserRoles( user, role );
};

Modules.server.registerUser = register;
