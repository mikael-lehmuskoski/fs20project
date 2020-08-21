import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button } from "semantic-ui-react";

// TODO: get state from redux, add buttons for login/logout, settings and about page
const Menu = () => {
  return (
    <Header>
      <Container id="menu">
        <Button as={Link} to="/">
          main
        </Button>
        <Button as={Link} to="/about">
          about
        </Button>
      </Container>
    </Header>
  );
};

export default Menu;
