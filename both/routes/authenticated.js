const blockUnauthorizedSubmitter = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'submitter' ] ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/viewers', {
  name: 'viewers',
  action() {
    BlazeLayout.render( 'default', { yield: 'viewers' } );
  }
});

authenticatedRoutes.route( '/submit', {
  name: 'submitInvite',
  action() {
    BlazeLayout.render( 'default', { yield: 'submitInvite' } );
  }
});
