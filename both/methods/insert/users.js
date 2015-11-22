Meteor.methods({
  acceptUserInvitation( user ) {
    check( user, {
      username, String,
      email: String,
      password: Object,
      token: String
    });

    try {
      var userId = Modules.server.acceptUserInvitation( user );
      return userId;
    } catch( exception ) {
      return exception;
    }
  }
});
