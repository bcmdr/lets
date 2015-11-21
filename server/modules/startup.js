let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _registerServiceConfigurations();
  _generateAccounts();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

let _registerServiceConfigurations = () => Modules.server.registerServiceConfigurations();

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
