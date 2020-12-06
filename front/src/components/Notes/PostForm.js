import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";

/**
 * Renders a simple form for saving a note. Gets disabled if user has over 10 notes already.
 * @param {Function} saveNote event handler for saving a note
 * @param {Array} notes array of notes, used to check if the user has too many notes
 */
const PostForm = ({ saveNote, notes }) => {
  const [content, setContent] = useState("");
  const noteCount = notes ? notes.length >= 10 : null;

  const handleSave = () => {
    saveNote(content);
    setContent("");
  };

  return (
    <div className="PostForm" id="PostForm">
      <Input
        value={noteCount ? "Too many notes, delete some!" : content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="eg. TODO: pet the cat"
        style={{ margin: "25px", minWidth: "60%" }}
        disabled={noteCount}
      />
      <Button
        style={{ margin: "5px" }}
        disabled={noteCount}
        onClick={() => handleSave()}
      >
        Save
      </Button>
    </div>
  );
};

export default PostForm;
