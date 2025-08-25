const express = require("express");
const router = express.Router();
const { newMessageController, postNewMessageController } = require("../controllers/newMessageController")

router.get("/", newMessageController)
router.post("/", postNewMessageController)

module.exports = router;