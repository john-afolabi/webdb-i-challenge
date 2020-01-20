const express = require("express");
const {
  getAccounts,
  getAccountById,
  insertAccount,
  updateAccount,
  removeAccount
} = require("./accounts-model");
const { validateAccountID, validatePostData } = require("../middlewares");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sort = req.query;    
    if (Object.entries(sort).length !== 0) {
      const allAccountsSorted = await getAccounts(sort);
      res.status(200).json(allAccountsSorted);
    } else {
      const allAccounts = await getAccounts();
      res.status(200).json(allAccounts);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", validateAccountID, (req, res) => {
  res.status(200).json(req.account);
});

router.post("/", validatePostData, async (req, res) => {
  try {
    const newAccount = req.body;
    const data = await insertAccount(newAccount);
    res.status(201).json(data);
  } catch (error) {
    console.log(e);
  }
});

router.put("/:id", validateAccountID, validatePostData, async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const updatedAccount = await updateAccount(id, changes);
    res.status(200).json(updatedAccount);
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", validateAccountID, async (req, res) => {
  try {
    const data = await removeAccount(req.params.id);
    res.status(200).json({ message: `${data} account has been deleted` });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
