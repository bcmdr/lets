let register = ( options ) => {
  var userId = _createUser( options );

  _addUserToRole( userId, 'viewer');

  return userId;
};

let _createUser = ( options ) => {
  var userId = Accounts.createUser( { username: options.username, email: options.email, password: options.password } );

  if ( userId ) {
    return userId;
  }
};

let _addUserToRole = ( userId, role ) => {
  Roles.setUserRoles( userId, role );
};

Modules.server.registerUser = register;
