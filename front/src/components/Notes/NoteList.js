import React from "react";
import { Button } from "semantic-ui-react";

/**
 * Renders a single note complete with its delete button
 * @param {Object} note a single note object with the fields id, content, date and maybe reminder
 * @param {Function} removeNote event handler for removing a note
 */
const renderItem = (note, removeNote) => {
  return (
    <div key={note.id} className="Note" id="Note">
      <div className="noteContent">
        <h3>{note.content}</h3>
        <p
          style={{
            margin: "10px",
          }}
        >
          {`created on `}
          {note.date}
        </p>
      </div>
      <Button
        size="tiny"
        value={JSON.stringify(note)}
        onClick={(e) => {
          removeNote(e.target.value);
        }}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </Button>
    </div>
  );
};

/**
 * Renders a list of items
 * @param {Array} notes an array of notes
 * @param {Function} removeNote event handler
 */
const renderList = (notes, removeNote) =>
  notes.map((note) => renderItem(note, removeNote));

const NoteList = ({ notes, removeNote }) => {
  if (!notes || !notes[0]) return null;
  return (
    <div className="NoteList" id="NoteList">
      {renderList(notes, removeNote)}
    </div>
  );
};

export default NoteList;
