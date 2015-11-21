const blockUnauthorizedAdmin = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

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

authenticatedRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action() {
    BlazeLayout.render( 'default', { yield: 'users' } );
  }
});

authenticatedRoutes.route( '/submitters', {
  name: 'submitters',
  triggersEnter: [ blockUnauthorizedSubmitter ],
  action() {
    BlazeLayout.render( 'default', { yield: 'submitters' } );
  }
});

authenticatedRoutes.route( '/viewers', {
  name: 'viewers',
  action() {
    BlazeLayout.render( 'default', { yield: 'viewers' } );
  }
});
