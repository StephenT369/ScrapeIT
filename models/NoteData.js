var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NoteDataSchema = new Schema({
  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  created: {
    type: Date,
    default: Date.now
  },
  noteText: String
});
var Note = mongoose.model("Note", NoteDataSchema);
module.exports = Note;