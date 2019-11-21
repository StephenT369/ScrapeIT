var db = require("../models");
module.exports = {
  deleteDB: function(req, res) {
    db.Article.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
