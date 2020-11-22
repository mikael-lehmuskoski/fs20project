/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Button, Popup, Modal } from "semantic-ui-react";
import actionCreators from "../reducers";
import LoginSignup from "./LoginSignup";
import Notification from "./Notification";

const MenuBar = (props) => {
  const [activeItem, setActive] = useState("bulletin");
  const [open, setOpen] = useState(false);
  const user = props.user ? props.user.user : null;

  const handleResponse = (success, message) => {
    if (success) {
      setOpen(false);
      props.POST_NOTIFICATION(message, 3, false);
    } else {
      props.POST_NOTIFICATION(message, 3, true);
    }
  }

  const handleLogout = () => {
    props.LOGOUT()
    props.POST_NOTIFICATION("Logged out!", 3, false);
  }

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="BULLETIN."
        active={activeItem === "bulletin"}
        onClick={() => setActive("bulletin")}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right" id="right">
        <Notification />
        <Menu.Item
          name="Settings"
          active={activeItem === "settings"}
          onClick={() => setActive("settings")}
          as={Link}
          to="/settings"
        />
        {user ? (
          <Popup
            trigger={(
              <Menu.Item
                name="Logout"
              />
            )}
            content={(
              <div className="popup">
                <p>Log out?</p>
                <Button
                  color="red"
                  content="Yes"
                  onClick={() => handleLogout()}
                />
              </div>
            )}
            on="click"
            position="bottom center"
          />
        ) : (
          <Menu.Item
            name="Login"
            onClick={() => setOpen(true)}
          />
        )}
      </Menu.Menu>
      <Modal
        className="ui Modal signupform"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        centered
      >
        <LoginSignup handleResponse={(success,message) => handleResponse(success,message)} />
      </Modal>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  LOGOUT: actionCreators.LOGOUT,
  POST_NOTIFICATION: actionCreators.POST_NOTIFICATION,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);