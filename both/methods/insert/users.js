Meteor.methods({
  acceptInvitation( user ) {
    check( user, {
      username: String,
      email: String,
      password: Object,
      token: String
    });

    try {
      var userId = Modules.server.acceptInvitation( user );
      return userId;
    } catch( exception ) {
      return exception;
    }
  }
});
