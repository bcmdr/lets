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

const adminRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'admin-login' );
  }
};

const adminRoutes = FlowRouter.group({
  name: 'admin',
  triggersEnter: [ adminRedirect ]
});

adminRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action() {
    BlazeLayout.render( 'default', { yield: 'users' } );
  }
});

adminRoutes.route( '/submit', {
  name: 'submit',
  triggersEnter: [ blockUnauthorizedSubmitter ],
  action() {
    BlazeLayout.render( 'default', { yield: 'submit' } );
  }
});
