/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import actionCreators from "../reducers";

const MenuBar = (props) => {
  const [activeItem, setActive] = useState("bulletin");
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
          <Menu.Item
            name="Logout"
            active={activeItem === "bulletin"}
            onClick={() => {
              setActive("bulletin");
              props.logout();
            }}
            as={Link}
            to="/"
          />
        ) : (
          <Menu.Item
            name="Login"
            active={activeItem === "login"}
            onClick={() => setActive("login")}
            as={Link}
            to="/login"
          />
        )}
      </Menu.Menu>
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
