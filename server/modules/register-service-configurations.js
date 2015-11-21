// Reference: https://themeteorchef.com/recipes/roll-your-own-authentication/

let registerServiceConfigurations = () => {
  _createServiceConfiguration('facebook', Meteor.settings.private.FACEBOOK_APP_ID, Meteor.settings.private.FACEBOOK_APP_SECRET);
}

let _createServiceConfiguration = (service, clientId, secret) => {
  ServiceConfiguration.configurations.remove({
    service: service
  });

  var config = {
    generic: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret
    }
  };

  switch (service) {
    case 'facebook':
      return ServiceConfiguration.configurations.insert(config.facebook);
    default:
      return ServiceConfiguration.configurations.insert(config.generic);
  }
};

Modules.server.registerServiceConfigurations = registerServiceConfigurations;
