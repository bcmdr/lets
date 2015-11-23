Meteor.methods({
  removeInvite( inviteId, ownerId) {
    check( inviteId, String );
    check( ownerId, String );
    check( ownerId, Match.OneOf( Meteor.userId() ) );

    try {
      Invites.remove( {_id: inviteId } );
    } catch( exception ) {
      return exception;
    }
  }
});
