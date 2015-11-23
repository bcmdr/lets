Template.invite.onCreated(function () {
  this.state = new ReactiveDict();
  this.state.set('detailsHidden', true);
});

Template.invite.events({
  'click .remove-invite': function (event, template) {
    var inviteId = this._id,
        ownerId = this.owner;
    var confirmDelete = confirm('Are you super sure you want to delete this invite?');
    if (confirmDelete) {
      Meteor.call('removeInvite', inviteId, ownerId, function(error) {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert( 'Invite Deleted', 'success' );
        }
      });
    }
  },
  'click .interest-button': function (event, template) {
    event.preventDefault();
    if (!Meteor.user()) {
      return;
    }
    var inviteId = this._id;
    Meteor.call('addInterest', inviteId, Meteor.userId(), function(error) {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        template.state.set('isHovering', false);
      }
    });
  },
  'click .remove-interest-button': function (event, template) {
    event.preventDefault();
    var inviteId = this._id;
    Meteor.call('removeInterest', inviteId, Meteor.userId(), function(error) {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        template.state.set('isHovering', false);
      }
    });
  },
  'click .show-details-button': function (event, template) {
    template.state.set('detailsHidden', false);
  },
  'click .hide-details-button': function (event, template) {
    template.state.set('detailsHidden', true);
  },
  'mouseover .interest-button': function (event, template) {
    template.state.set('isHovering', true);
  },
  'mouseover .remove-interest-button': function (event, template) {
    template.state.set('isHovering', true);
  },
  'mouseout .interest-button': function (event, template) {
    template.state.set('isHovering', false);
  },
  'mouseout .remove-interest-button': function (event, template) {
    template.state.set('isHovering', false);
  }
});
