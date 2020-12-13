import React from "react";
import { Container } from "semantic-ui-react";

import Clock from "./Clock";
import Notes from "./Notes";
import RSS from "./RSS";

/**
 * Renders the main view.
 */
const Main = () => {
  return (
    <Container className="Mid">
      <Container className="Main" id="Main">
        <Clock />
        <Notes />
        <RSS />
      </Container>
    </Container>
  );
};

export default Main;
