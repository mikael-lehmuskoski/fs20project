import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Button, Popup, Modal, Container } from "semantic-ui-react";
import actionCreators from "../reducers";
import LoginSignup from "./LoginSignup";
import Notification from "./Notification";

/**
 *    MenuBar
 *
 * Renders the top bar with links to the main view, the settings and buttons for logging in and out
 *
 * @function
 *
 * @param {object} props
 * @param {object} props.user the user's details
 * @param {function} props.LOGOUT action creator for logging out
 * @param {function} props.POST_NOTIFICATION action creator for showing notifications
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const MenuBar = (props) => {
  const [activeItem, setActive] = useState("bulletin");
  const [open, setOpen] = useState(false);
  const user = props.user?.token?.value ? props.user.user : null;

  /**
   *    handleResponse
   *
   * Callback function for closing the modal and posting an appropriate notification
   *
   * @function
   *
   * @param {boolean} success success
   * @param {string} message message
   *
   * @author Mikael
   */
  const handleResponse = (success, message) => {
    if (success) {
      setOpen(false); // close modal
      props.POST_NOTIFICATION(message, 3, false);
    } else {
      props.POST_NOTIFICATION(message, 3, true);
    }
  };

  /**
   *    handleLogout
   *
   * @function
   *
   * Event handler for logging out and letting the user know they've logged out
   *
   * @author Mikael
   */
  const handleLogout = () => {
    props.LOGOUT();
    props.POST_NOTIFICATION("Logged out!", 3, false);
  };

  return (
    <div className="header">
      <Container>
        <Menu pointing secondary>
          <Menu.Item
            content={`BULLETIN.`} // eslint-disable-line
            id="linkButton"
            active={activeItem === "bulletin"}
            onClick={() => setActive("bulletin")}
            as={Link}
            to="/"
          />
          <Menu.Menu position="right" id="right">
            <Notification />
            {user ? (
              <Menu.Item
                name="Settings"
                id="linkButton"
                active={activeItem === "settings"}
                onClick={() => setActive("settings")}
                as={Link}
                to="/settings"
              />
            ) : null}
            { /* eslint-disable prettier/prettier */ // eslint-disable-line
              user ? (
                <Popup
                  trigger={(
                    <Menu.Item
                      id="linkButton"
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
                  id="linkButton"
                  onClick={() => setOpen(true)}
                />
                )
              /* eslint-enable prettier/prettier */
            }
          </Menu.Menu>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="mini"
            centered
          >
            <LoginSignup
              handleResponse={(success, message) =>
                handleResponse(success, message)
              } // eslint-disable-line
            />
          </Modal>
        </Menu>
      </Container>
    </div>
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
