import React from "react";
import { Container } from "semantic-ui-react";

import Clock from "./Clock";
import Notes from "./Notes";
import RSS from "./RSS";

const Main = () => {
  return (
    <Container className="Main">
      <Container>
        <Clock />
        <Notes />
        <RSS />
      </Container>
    </Container>
  );
};

export default Main;
