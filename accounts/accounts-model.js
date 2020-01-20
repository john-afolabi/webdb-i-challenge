const db = require("../data/dbConfig");

function getAccounts() {
  return db("accounts");
}

function getAccountById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

module.exports = {
  getAccounts,
  getAccountById
};
