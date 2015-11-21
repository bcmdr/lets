let setAccountsOnLogin = () => {
  Accounts.onLogin( function () {
    var user = Meteor.user();
    var userId = Meteor.userId();
    if ( !user.roles || user.roles.length === 0 ) {
      Roles.addUsersToRoles( userId, ['viewer'] );
    }
  });
}

Modules.both.setAccountsOnLogin = setAccountsOnLogin;
