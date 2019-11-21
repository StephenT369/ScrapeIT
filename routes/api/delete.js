var router = require("express").Router();
var deleteController = require("../../controllers/delete");
router.get("/", deleteController.deleteDB);
module.exports = router;
