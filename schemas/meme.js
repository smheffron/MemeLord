var mongoose = require('mongoose');

var memeSchema = mongoose.Schema({
    imageSrc: String,
    category: String,
    title: String,
    likes: Number,
    comments: [String]
});

module.exports = mongoose.model("Meme", memeSchema);