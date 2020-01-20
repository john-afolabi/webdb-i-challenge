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
    .then(([id]) => getAccountById(id))
}

module.exports = {
  getAccounts,
  getAccountById,
  insertAccount
};
