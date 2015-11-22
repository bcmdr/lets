Template.submitInvite.onRendered( () => {
  Modules.client.submitInvite({
    form: "#submitInvite",
    template: Template.instance()
  });
});

Template.submitInvite.events({
  'submit form': ( event, template ) => {
    event.preventDefault();
  }
});
