let userInvitation = ( options ) => {
  _insertUserInvitation( options );
  var email = _prepareEmail( options.token );
  _sendUserInvitation( options.email, email );
};

let _insertUserInvitation = ( userInvite ) => {
  UserInvitations.insert( userInvite );
};

let _prepareEmail = ( token ) => {
  let domain = Meteor.settings.private.DOMAIN;
  let url    = `http://${ domain }/user-invite/${ token }`;

  SSR.compileTemplate( 'userInvitation', Assets.getText( 'email/templates/user-invitation.html' ) );
  let html = SSR.render( 'userInvitation', { url: url } );

  return html;
};

let _sendUserInvitation = ( email, content ) => {
  Email.send({
    to: email,
    from: "Team Shallwi <sup@shallwi.co>",
    subject: "Invitation to Lets",
    html: content
  });
};

Modules.server.sendUserInvitation = userInvitation;
