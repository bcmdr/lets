Template.interests.onCreated(function() {
  var instance = this;

  instance.autorun(function() {
    instance.subscribe('invites');
    instance.subscribe('usernames');
  });
});
