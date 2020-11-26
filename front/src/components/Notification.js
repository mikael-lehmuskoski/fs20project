/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect /* useState */ } from "react";
// import { Popup } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import actionCreators from "../reducers";

const Notification = (props) => {
  useEffect(() => {
    if (props.timeoutID) {
      clearTimeout(props.timeoutID);
      props.SET_TIMEOUTID();
    }

    const newTimeoutID = setTimeout(
      () => {
        props.CLEAR_NOTIFICATION();
      },
      props.timeout ? props.timeout * 1000 : 0
    );
    if (props.id) props.SET_TIMEOUTID(newTimeoutID);
  }, [props.id]); // eslint-disable-line

  if (props.message) {
    return <Menu.Item active name={props.message} color={props.error ? 'red' : 'green'} />;// eslint-disable-line
  }
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
        ? state.notification.timeout
        : null,
    error:
      state.notification && state.notification.error
        ? state.notification.error
        : null,
    timeoutID:
      state.notification && state.notification.timeoutID
        ? state.notification.timeoutID
        : null,
  };
};

const mapDispatchToProps = {
  CLEAR_NOTIFICATION: actionCreators.CLEAR_NOTIFICATION,
  SET_TIMEOUTID: actionCreators.SET_TIMEOUTID,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
