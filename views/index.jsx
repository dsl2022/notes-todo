const React = require("react");
const Default = require("./layouts/Default");

function Index({ notes, title }) {
  console.log(notes);
  const notesRendered = notes.map((note) => (
    <li key={note._id}>
      <h3>{note.title}</h3>
      <h4>{note.noteBody}</h4>
      <h5>{`Created on: ${note.createdAt}`}</h5>
    </li>
  ));
  return (
    <Default title="temp">
      <h2>{title}</h2>
      <ul>{notesRendered}</ul>
    </Default>
  );
}

module.exports = Index;
