var mongoose = require('mongoose');

var memeSchema = mongoose.Schema({
    imageSrc: String,
    likes: Number,
    comments: [String]
});

module.exports = mongoose.model("Meme", memeSchema);