/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import actionCreators from "../reducers";

// TODO: fix infinite renders
const Notification = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.timeoutID) {
      clearTimeout(props.timeoutID);
      props.setTimeoutID();
    }

    const newTimeoutID = setTimeout(
      () => {
        props.clearNotification();
      },
      props.timeout ? props.timeout * 1000 : 3000
    );
    props.setTimeoutID(newTimeoutID);

    /* return () => {
      clearTimeout(newTimeoutID);
      props.setTimeoutID();
    }; */
  }, [props.id, props.message]); // eslint-disable-line

  if (props.message)
    return (
      <Popup
        trigger={props.message}
        content={props.message}
        open={open}
        onClose={setOpen(false)}
        onOpen={setOpen(true)}
      />
    );
  return null;
};

const mapStateToProps = (state) => {
  return {
    message:
      state.notification && state.notification.message
        ? state.notification.message
        : null,
    id:
      state.notification && state.notification.id
        ? state.notification.id
        : null,
    timeout:
      state.notification && state.notification.timeout
        ? state.notification.id
        : null,
    timeoutID:
      state.notification && state.notification.timeoutID
        ? state.notification.timeoutID
        : null,
  };
};

const mapDispatchToProps = {
  clearNotification: actionCreators.clearNotification,
  setTimeoutID: actionCreators.setTimeoutID,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
