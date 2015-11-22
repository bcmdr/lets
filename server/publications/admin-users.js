Meteor.publish( 'adminUsers', function() {
  let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

  if ( isAdmin ) {
    return [
      Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1, "services.facebook.email": 1 } } ),
      UserInvitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
    ];
  } else {
    return null;
  }
});
