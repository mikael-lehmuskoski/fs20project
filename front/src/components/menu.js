/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";
import actionCreators from "../reducers";

const Menu = (props) => {
  const user = props.user ? props.user.user : null;
  return (
    <Header>
      <Container id="menu">
        <Button as={Link} to="/">
          main
        </Button>
        <Button as={Link} to="/about">
          about
        </Button>
        <Button as={Link} to="/settings">
          settings
        </Button>
        {user ? (
          <Button onClick={() => props.logout()}>log out</Button>
        ) : (
          <Button as={Link} to="/login">
            login
          </Button>
        )}
      </Container>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  logout: actionCreators.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
