Template.loginSignup.events({
  'click .btn-facebook': function ( event, template ) {
    var permissions = ['public_profile', 'user_friends', 'email'];
    Meteor.loginWithFacebook({requestPermissions: permissions}, function (error) {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      }
    });
  }
});
