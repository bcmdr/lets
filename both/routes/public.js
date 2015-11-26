const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
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

publicRoutes.route( '/invites/:_id', {
  name: 'single-invite',
  action() {
    BlazeLayout.render( 'default', { yield: 'singleInvite' } );
  }
});
