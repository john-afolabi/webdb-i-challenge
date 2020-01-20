const { getAccountById } = require("../accounts/accounts-model");

const validateAccountID = async (req, res, next) => {
  try {
    const account = await getAccountById(req.params.id);
    if (account) {
      req.account = account;
      next();
    } else {
      res
        .status(400)
        .json({ message: `There is no Account with ID:${req.params.id}` });
    }
  } catch (e) {
    res
      .status(500)
      .json({ errorMessage: "Cannot retrieve account details at this moment" });
  }
};

const validatePostData = async (req, res, next) => {
  if (req.body.budget && req.body.name) {
    next();
  } else {
    res.json({ message: "Missing Values: Please provide a name and a budget" });
  }
};

module.exports = {
  validateAccountID,
  validatePostData
};
