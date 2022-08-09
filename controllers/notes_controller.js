const express = require("express");
const notes = express.Router();
const Note = require("../models/notes.js");
// const Author = require("../models/authors.js");
const notesSeedData = require("../models/notes_seed");

notes.get("/", async (req, res) => {
  const notes = await Note.find();
  res.render("index", {
    notes: notes,
    title: "Todo App Home Page",
  });
});

notes.get("/data/seed", async (req, res) => {
  const seeded = await Note.insertMany(notesSeedData);
  console.log(seeded);
});

notes.get("/new", (req, res) => {
  res.render("new", {});
});

notes.post("/", (req, res) => {
  Note.create(req.body);
  res.redirect("/notes");
});

module.exports = notes;
