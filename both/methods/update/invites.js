Meteor.methods({
  addInterest( inviteId, userId ) {
    check( inviteId, String );
    check( userId, String );
    check( userId, Match.OneOf( Meteor.userId() ) )

    var invite = Invites.findOne({_id: inviteId});

    if ( invite.interested.indexOf(userId) > -1 ) {
      throw new Meteor.Error('already-interested', 'This user is already interested in this post.');
    }

    try {
      Invites.update( inviteId, {
        $push: { 'interested': userId },
        $inc: {'interestedCount': 1}
      });
    } catch( exception ) {
      return exception;
    }
  },
  removeInterest( inviteId, userId ) {
    check( inviteId, String );
    check( userId, String );
    check( userId, Match.OneOf( Meteor.userId() ) )

    try {
      Invites.update( inviteId, {
        $pull: { 'interested': userId },
        $inc: {'interestedCount': -1}
      });
    } catch( exception ) {
      return exception;
    }
  }
});
