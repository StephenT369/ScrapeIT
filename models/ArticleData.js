var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleDataSchema = new Schema({
	headline: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		default: "No Summary"
	},
	saved: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		default: "Saved Article"
	},
	created: {
		type: Date,
		default: Date.now
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

ArticleDataSchema.index({title: "text"});

var Article  = mongoose.model("Article", ArticleDataSchema);
module.exports = Article;