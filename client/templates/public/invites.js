Template.invites.onCreated(function() {
  Template.instance().subscribe( 'invites' );
  Template.instance().subscribe( 'usernames' );
});

Template.invites.helpers({
  invites: function() {
    return Invites.find({}, {sort: {createdOn: -1}}) || {};
  }
});
