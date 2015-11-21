let invitation = ( options ) => {
  _insertInvitation( options );
  var email = _prepareEmail( options.token );
  _sendInvitation( options.email, email );
};

let _insertInvitation = ( invite ) => {
  Invitations.insert( invite );
};

let _prepareEmail = ( token ) => {
  let domain = Meteor.settings.private.DOMAIN;
  let url    = `http://${ domain }/invite/${ token }`;

  SSR.compileTemplate( 'invitation', Assets.getText( 'email/templates/invitation.html' ) );
  let html = SSR.render( 'invitation', { url: url } );

  return html;
};

let _sendInvitation = ( email, content ) => {
  console.log("Sending email to: " + email);
  Email.send({
    to: email,
    from: "Team Shallwi <sup@shallwi.co>",
    subject: "Invitation to Lets",
    html: content
  });
};

Modules.server.sendInvitation = invitation;
