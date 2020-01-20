const express = require("express");
const { getAccounts, getAccountById } = require("./accounts-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allAccounts = await getAccounts();
    res.status(200).json(allAccounts);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const account = await getAccountById(req.params.id);
    res.status(200).json(account);
  } catch (e) {
    console.log(e);
  }
});
