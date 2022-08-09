const React = require("react");
const Default = require("./layouts/Default");

function New() {
  return (
    <Default>
      <h2>New</h2>
      <form action="/notes" method="POST">
        <label htmlFor="title">Name</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="noteBody">Details</label>
        <input type="text" name="noteBody" id="noteBody" required />
        <label htmlFor="createdAt">Created At:</label>
        <input
          type="text"
          name="createdAt"
          id="createdAt"
          value={new Date().toLocaleString()}
        />
        <input type="submit" />
      </form>
    </Default>
  );
}
module.exports = New;
