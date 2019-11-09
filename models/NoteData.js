var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NoteDataSchema = new Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	}
});

var Note = mongoose.model("Note", NoteDataSchema);
module.exports = Note;