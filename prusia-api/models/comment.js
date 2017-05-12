const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    articleId: String,
    comment: String,
    userId: String
});

let Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;