import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";

const PostForm = ({ saveNote }) => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    saveNote(content);
  };

  return (
    <div className="PostForm" id="PostForm">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="eg. TODO: pet the cat"
        style={{ margin: "25px", minWidth: "60%" }}
      />
      <Button style={{ margin: "5px" }} onClick={() => handleSave()}>
        Save
      </Button>
    </div>
  );
};

export default PostForm;
