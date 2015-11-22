Meteor.publish( 'publicUsers', function() {
  Meteor.users.find( {}, { fields: { "services.facebook.name": 1, "services.facebook.first_name": 1, "services.facebook.last_name": 1, "services.facebook.id": 1 } } );
});
