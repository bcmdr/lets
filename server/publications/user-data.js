Meteor.publish( 'userData', function() {
  let userId = this.userId;
  if (userId) {
    return Meteor.users.find( {_id: userId}, { fields: { "emails.address": 1, "services.facebook.name": 1 } } );
  } else {
    return null;
  }
});
