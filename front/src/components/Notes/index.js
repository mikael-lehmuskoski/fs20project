import React from "react";
import { connect } from "react-redux";

import actionCreators from "../../reducers";

import PostForm from "./PostForm";
import NoteList from "./NoteList";

/**
 * Renders the note applet
 * @param {*} props
 * @param {Object} props.user the main user object
 * @param {Object} props.user.token contains field value that contains the token value
 * @param {Object} props.user.user contains all other user data and stuff
 * @param {Function} props.SAVE_NOTE action creator for creating a note
 * @param {Function} props.REMOVE_NOTE action creator for removing a note
 * @param {Function} props.POST_NOTIFICATION action creator for posting a notification
 */
const Notes = (props) => {
  const token = props.user ? props.user.token.value : null;
  const user = props.user ? props.user.user : null;
  const notes = user ? user.notes : null;

  /**
   * Creates the proper note object and sends it away to the action creator, posts an appropriate notification after the action creator is done creating action
   * @param {String} note string value for the note's content field
   */
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

  /**
   * Sends the specified note to the action creator, posts an appropriate notification after the action creator is done creating action
   * @param {Object} note an entire note object stringified with JSON.stringify()
   */
  const removeNote = async (note) => {
    const res = await props.REMOVE_NOTE(JSON.parse(note), token);
    if (res.message) props.POST_NOTIFICATION(res.message, 3, true);
    else props.POST_NOTIFICATION("Note deleted!", 3, false);
  };

  if (!props.user) return <div className="Notes" id="Notes"><h3  style={{ margin: "30px", textAlign: "center" }} >You must log in to use notes</h3></div>; // eslint-disable-line
  return (
    <div className="Notes" id="Notes">
      <PostForm saveNote={saveNote} notes={notes} />
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user ? state.user : null };
};

const mapDispatchToProps = {
  SAVE_NOTE: actionCreators.SAVE_NOTE,
  // MODIFY_NOTE: actionCreators.MODIFY_NOTE,
  REMOVE_NOTE: actionCreators.REMOVE_NOTE,
  POST_NOTIFICATION: actionCreators.POST_NOTIFICATION,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
