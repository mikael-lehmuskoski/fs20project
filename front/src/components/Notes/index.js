import React from "react";
import { connect } from "react-redux";

import actionCreators from "../../reducers";

import PostForm from "./PostForm";
import NoteList from "./NoteList";

// todo: modify & remove notes
const Notes = (props) => {
  const token = props.user ? props.user.token.value : null;
  const user = props.user ? props.user.user : null;
  const notes = user ? user.notes : null;

  const saveNote = async (note) => {
    const noteObject = {
      date: new Date().toISOString().substring(0, 10),
      content: note,
      reminder: "",
    };
    const res = await props.SAVE_NOTE(noteObject, token);
    if (res.message) props.POST_NOTIFICATION(res.message, 3, true);
    else props.POST_NOTIFICATION("Note saved!", 3, false);
  };

  if (!props.user) return <div className="Notes" id="Notes"><h3  style={{ margin: "30px", textAlign: "center" }} >You must log in to use notes</h3></div>; // eslint-disable-line
  return (
    <div className="Notes" id="Notes">
      <PostForm saveNote={saveNote} />
      <NoteList notes={notes} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user ? state.user : null };
};

const mapDispatchToProps = {
  SAVE_NOTE: actionCreators.SAVE_NOTE,
  // MODIFY_NOTE: actionCreators.MODIFY_NOTE,
  // REMOVE_NOTE: actionCreators.REMOVE_NOTE,
  POST_NOTIFICATION: actionCreators.POST_NOTIFICATION,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
