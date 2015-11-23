Meteor.publish('invites', function(limit) {
  return Invites.find({}, {limit: limit});
});
