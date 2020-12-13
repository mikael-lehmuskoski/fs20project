import React from "react";
import { Button } from "semantic-ui-react";

/**
 * Renders a single note complete with its delete button
 *
 * @param {Object} note a single note object with the fields id, content, date and maybe reminder
 * @param {Function} removeNote event handler for removing a note
 *
 */
const renderItem = (item, removeItem) => {
  if (!item || !item.id || !removeItem) return null;
  return (
    <div key={item.id} className="Note" id="Note">
      <div className="noteContent">
        <h3>{item.content}</h3>
        <p
          style={{
            margin: "10px",
          }}
        >
          {`created on `}
          {item.date}
        </p>
      </div>
      <Button
        size="tiny"
        value={JSON.stringify(item)}
        onClick={(e) => {
          removeItem(e.target.value);
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
 *
 * @param {Array} item an array of items
 * @param {Function} removeItem event handler for removing the item it's attached to
 *
 */
const renderList = (items, removeItem) =>
  items.map((item) => renderItem(item, removeItem));

const NoteList = ({ notes, removeNote }) => {
  if (!notes || !notes[0]) return null;
  return (
    <div className="NoteList" id="NoteList">
      {renderList(notes, removeNote)}
    </div>
  );
};

export default NoteList;
