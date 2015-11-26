Meteor.publish( 'singleInvite', function( inviteId ) {
  check( inviteId, String );
  return Invites.find( { "_id": inviteId } );
});
