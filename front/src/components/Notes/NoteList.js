import React from "react";

// TODO: button for delete/modify
const renderItem = (note) => {
  return (
    <div key={note.content + note.date} className="Note" id="Note">
      <h3>{note.content}</h3>
      <p style={{ margin: "inherit" }}>
        {`created on `}
        {note.date}
      </p>
      <p>{note.reminder ? note.reminder : ""}</p>
    </div>
  );
};

const renderList = (notes) => notes.map((note) => renderItem(note));

const NoteList = ({ notes }) => {
  if (!notes) return null;
  return (
    <div className="NoteList" id="NoteList">
      {renderList(notes)}
    </div>
  );
};

export default NoteList;
