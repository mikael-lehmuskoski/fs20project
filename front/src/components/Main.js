import React from "react";
import { Container } from "semantic-ui-react";
import Clock from "./Clock";

const Main = () => {
  return (
    <Container className="Main">
      <Container>
        <Clock />
      </Container>
    </Container>
  );
};

export default Main;
