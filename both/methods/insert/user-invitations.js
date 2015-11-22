Meteor.methods({
  sendUserInvitation( userInvitation ) {
    check( userInvitation, {
      email: String,
      role: String
    });

    try {
      Modules.server.sendUserInvitation({
        email: userInvitation.email,
        token: Random.hexString( 16 ),
        role: userInvitation.role,
        date: ( new Date() ).toISOString()
      });
    } catch( exception ) {
      return exception;
    }
  }
});
