const React = require("react");
const Default = require("./layouts/Default");

function New() {
  return (
    <Default>
      <h2>New</h2>
      <form action="/notes" method="POST">
        <label htmlFor="title">Name</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="note-body">Details</label>
        <input type="text" name="note-body" id="note-body" required />
        <label htmlFor="created-at">Created At:</label>
        <input
          type="text"
          name="created-at"
          id="created-at"
          value={new Date().toLocaleString()}
        />
        <input type="submit" />
      </form>
    </Default>
  );
}
module.exports = New;
