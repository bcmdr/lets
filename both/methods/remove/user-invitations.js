Meteor.methods({
  revokeUserInvitation( userInviteId ) {
    check( userInviteId, String );

    try {
      UserInvitations.remove( userInviteId );
    } catch( exception ) {
      return exception;
    }
  }
});
