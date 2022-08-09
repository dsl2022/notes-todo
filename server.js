const express = require("express");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongodb connection success");
  }
);
const PORT = process.env.PORT;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/health", (req, res) => {
  res.send("server is healthy");
});

const notesController = require("./controllers/notes_controller");
app.use("/notes", notesController);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log("running at port", PORT);
});
