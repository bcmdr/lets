Template.adminLogin.onRendered( () => {
  Modules.client.login( { form: "#admin-login", template: Template.instance() } );
});

Template.adminLogin.events({
  'submit form': ( event ) => event.preventDefault()
});
