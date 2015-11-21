let startup = () => {
  _setAccountsOnLogin();
};

var _setAccountsOnLogin = () => Modules.both.setAccountsOnLogin();

Modules.both.startup = startup;
