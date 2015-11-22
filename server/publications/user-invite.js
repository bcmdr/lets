Meteor.publish( 'userInvite', function( token ) {
  check( token, String );
  return UserInvitations.find( { "token": token } );
});
