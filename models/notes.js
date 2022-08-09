const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: { type: String, required: true },
  noteBody: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;
