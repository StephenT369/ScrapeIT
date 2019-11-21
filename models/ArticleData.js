var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleDataSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    default: "No Summary"
  },
  url: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});
var Article = mongoose.model("Article", ArticleDataSchema);
module.exports = Article;
