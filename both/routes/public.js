const publicRedirect = ( context, redirect ) => {
  if ( Meteor.userId() ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'loginSignup' } );
  }
});

publicRoutes.route( '/admin-login', {
  name: 'admin-login',
  action() {
    BlazeLayout.render( 'default', { yield: 'adminLogin' } );
  }
});


publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/user-invite/:token', {
  name: 'user-invite',
  action() {
    BlazeLayout.render( 'default', { yield: 'userInvite' } );
  }
});
