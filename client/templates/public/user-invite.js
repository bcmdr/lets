Template.userInvite.onCreated( () => {
  Template.instance().subscribe( 'userInvite', FlowRouter.current().params.token );
});

Template.userInvite.helpers({
  userInvitation: function() {
    var userInvite = UserInvitations.findOne();

    if ( userInvite ) {
      return userInvite;
    }
  }
});

Template.userInvite.events({
  'submit form': function( event, template ) {
    event.preventDefault();

    let password = template.find( '[name="password"]' ).value;

    let user = {
      email: template.find( '[name="emailAddress"]' ).value,
      password: Accounts._hashPassword( password ),
      token: FlowRouter.current().params.token
    };

    Meteor.call( 'acceptUserInvitation', user, function( error, response ) {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Meteor.loginWithPassword( user.email, password );
      }
    });
  }
});
