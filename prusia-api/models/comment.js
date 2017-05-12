const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    body: String,
    userId: String,
});

let Comment = mongoose.model('Article', commentSchema);

module.exports = Comment;