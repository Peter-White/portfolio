var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  content: {
    type: String
  }

});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
