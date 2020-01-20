const db = require("../data/dbConfig");

function getAccounts() {
  return db("accounts");
}

module.exports = {
  getAccounts
};
