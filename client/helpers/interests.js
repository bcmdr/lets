Template.interests.helpers({
  interests: function ( user ) {
    var userId = user._id;
    return Invites.find({ interested: { $in: [ userId ] } }) || {};
  }
});
