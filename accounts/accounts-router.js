const express = require("express");
const { getAccounts } = require("./accounts-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allAccounts = await getAccounts();
    res.status(200).json(allAccounts);
  } catch (e) {
    console.log(e);
  }
});


