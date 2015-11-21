let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _setAccountsConfig();
  _registerServiceConfigurations();
  _generateAccounts();
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

var _setAccountsConfig = () => Modules.server.setAccountsConfig();

let _registerServiceConfigurations = () => Modules.server.registerServiceConfigurations();

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
