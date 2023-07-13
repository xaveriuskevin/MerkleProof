const express = require("express");
const router = express.Router();
const { merkletree } = require("../controllers/merkletree.js");

router.post("/merkletree", merkletree);

module.exports = router;
