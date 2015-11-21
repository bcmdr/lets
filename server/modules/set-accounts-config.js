let setAccountsConfig = () => {
  Accounts.config({
    forbidClientAccountCreation: true
  });
};

Modules.server.setAccountsConfig = setAccountsConfig;
