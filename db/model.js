const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  email: String,
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

AuthorSchema.virtual('posts', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'author',
})
// AuthorSchema.set('toObject', { virtuals: true })
// AuthorSchema.set('toJSON', { virtuals: true })

const BlogSchema = new Schema({
   title: String,
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author"
   },
   body: String,
})

const Author = mongoose.model("Author", AuthorSchema);
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = {Author, Blog}