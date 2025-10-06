const express = require("express")
const aiController = require("../controllers/ai.controller")
const router = express.Router()

router.post("/code-view",aiController.getresponse)

module.exports = router