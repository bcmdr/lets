Invites = new Meteor.Collection( 'invites' );

Invites.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Invites.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let InviteSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  },
  "createdOn": {
    type: Date,
    label: "The creation date of this document."
  },
  "title": {
    type: String,
    label: "The title of this document."
  },
  "description": {
    type: String,
    optional: true,
    label: "The descirption of this document."
  },
  "url": {
    type: String,
    optional: true,
    label: "The URL or external link of this document."
  },
  "interestedCount": {
    type: Number,
    label: "The count of users interested in this document."
  },
  "interested": {
    type: [String],
    label: "The list of IDs for users interested in this document."
  }
});

Invites.attachSchema( InviteSchema );
