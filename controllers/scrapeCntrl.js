var db = require("../models");
var scrape = require("../scripts/scrapeArticle");
module.exports = {
  scrapeArticles: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Article.create(articles);
      })
      .then(function(dbArticle) {
        if (dbArticle.length === 0) {
          res.json({
            message: "No articles today. Check again tomorrow!"
          });
        } else {
          res.json({
            message: "added " + dbArticle.length + " articles!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "scrape done"
        });
      });
  }
};