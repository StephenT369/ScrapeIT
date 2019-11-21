var router = require("express").Router();
var noteController = require("../../controllers/noteCntrl");
router.get("/:id", noteController.find);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);
module.exports = router;