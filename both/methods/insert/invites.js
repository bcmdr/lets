Meteor.methods({
  createInvite( invite, userId ) {
    check( userId, Match.OneOf( Meteor.userId() ) );
    check( userId, String );
    check( invite, {
      title: String,
      description: String,
      url: String
    });

    if ( !Roles.userIsInRole( userId, [ 'admin', 'submitter' ] ) ) {
      throw new Meteor.Error( 'not-authorized', 'You must be a submitter to post invites.' ); 
    }

    try {
      var inviteId = Invites.insert({
        owner: userId,
        createdOn: new Date(),
        title: invite.title,
        description: invite.description,
        url: invite.url,
        interestedCount: 0,
        interested: []
      });
      return inviteId;
    } catch( exception ) {
      return exception;
    }
  }
});
