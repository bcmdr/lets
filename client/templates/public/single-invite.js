Template.singleInvite.onCreated( () => {
  Template.instance().subscribe( 'singleInvite', FlowRouter.current().params._id );
  Template.instance().subscribe( 'usernames' );
});

Template.singleInvite.helpers({
  singleInvite: function() {
    var invite = Invites.findOne();

    if ( invite ) {
      return invite;
    }
  }
});
