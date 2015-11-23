Meteor.publish("usernames", function () {
  return Meteor.users.find({}, {fields: {'username': 1}});
});
