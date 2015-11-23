Template.invites.onCreated(function() {
  var instance = this;

  instance.autorun(function() {
    instance.subscribe('invites');
    instance.subscribe('usernames');
  });
});

Template.invites.helpers({
  invites: function() {
    return Invites.find({}, {sort: {createdOn: -1}}) || {};
  }
});
