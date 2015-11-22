UserInvitations = new Meteor.Collection( 'invitations' );

UserInvitations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

UserInvitations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let UserInvitationsSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email to send invitation to."
  },
  token: {
    type: String,
    label: "Invitation token."
  },
  role: {
    type: String,
    label: "Role to apply to the user."
  },
  date: {
    type: String,
    label: "Invitation Date"
  }
});

UserInvitations.attachSchema( UserInvitationsSchema );
