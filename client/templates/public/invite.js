Template.invite.onCreated( function () {
  this.state = new ReactiveDict();
  this.state.set('detailsHidden', false);
});

let getUsername = function (userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (user) {
    return user.username;
  }
}

let getFromState = function (key) {
  return Template.instance().state.get(key);
}

Template.invite.helpers({
  detailsHidden: function () {
    return getFromState('detailsHidden');
  },
  displayValue: function () {
    return getFromState('detailsHidden') ? 'none' : 'block';
  },
  username: function (userId) {
    return getUsername(userId);
  },
  formatDate: function (date) {
    return moment(date).format('MMM DD, YYYY');
  },
  formatUrl: function (url) {
    // return url.substring(url.lastIndexOf('://') + 3);
    return url;
  },
  isInterested: function () {
    return this.interested.indexOf(Meteor.userId()) > -1;
  },
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
  isHovering: function() {
    return getFromState('isHovering');
  },
  interestedList: function () {
    var list = [];
    var string = "";


    // Set var for number of names to display
    var maxNames = 5;
    var numNames = ( this.interestedCount > 1 && this.interestedCount <= maxNames ) ? this.interestedCount : 1;

    // Get the list of usernames
    this.interested.forEach( function( interestedUser ) {
      var username = getUsername( interestedUser );
      list.push(username);
    });

    // Append commas if more than one interested
    for (i = 0; i < numNames; i++) {
      if (i > 0) {
        string = string.concat(", ")
      }
      string = string.concat(list[i]);
    }

    // Append number of additional if more than can display.
    if (this.interestedCount > maxNames) {
      string = string.concat("and " + n + " More");
    }

    // Final Append
    string = string.concat(" interested");
    return string;
  }
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
