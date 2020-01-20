const db = require("../data/dbConfig");

function getAccounts() {
  return db("accounts");
}

function getAccountById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function insertAccount(account) {
  return db("accounts")
    .insert(account)
    .then(([id]) => getAccountById(id));
}

function updateAccount(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? getAccountById(id) : null));
}

function removeAccount(id) {
  return db("accounts")
    .where({ id })
    .del();
}


module.exports = {
  getAccounts,
  getAccountById,
  insertAccount,
  updateAccount,
  removeAccount
};
