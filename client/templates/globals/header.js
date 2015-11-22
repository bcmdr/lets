Template.header.onCreated( () => {
  Template.instance().subscribe( 'userData' );
});

Template.header.helpers({
});

Template.header.events({
  'click .logout': function () {
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
      }
    });
  }
});
