var router = require("express").Router();
var scrapeController = require("../../controllers/scrapeCntrl");
router.get("/", scrapeController.scrapeArticles);
module.exports = router;
