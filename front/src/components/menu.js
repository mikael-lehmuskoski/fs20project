/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Button, Popup, Modal } from "semantic-ui-react";
import actionCreators from "../reducers";
import LoginSignup from "./LoginSignup";

const MenuBar = (props) => {
  const [activeItem, setActive] = useState("bulletin");
  const [open, setOpen] = useState(false);

  const user = props.user ? props.user.user : null;
  return (
    <Menu pointing secondary>
      <Menu.Item
        name="BULLETIN."
        active={activeItem === "bulletin"}
        onClick={() => setActive("bulletin")}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="About"
        active={activeItem === "about"}
        onClick={() => setActive("about")}
        as={Link}
        to="/about"
      />
      <Menu.Item
        name="Settings"
        active={activeItem === "settings"}
        onClick={() => setActive("settings")}
        as={Link}
        to="/settings"
      />
      <Menu.Menu position="right">
        {user ? (
          <Popup
            trigger={(
              <Menu.Item
                name="Logout"
              />
            )}
            content={(
              <div style={{ justifyContent:"center" }}>
                <p>Log out?</p>
                <Button
                  color="red"
                  content="Yes"
                  onClick={() => props.logout()}
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
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <LoginSignup />
      </Modal>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  logout: actionCreators.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);