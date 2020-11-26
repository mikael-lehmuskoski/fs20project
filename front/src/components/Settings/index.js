/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Container, Dropdown, Accordion, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import themes from "./themes";
import actionCreators from "../../reducers";

// TODO: separate Accordion.content into own components, save settings
const Settings = (props) => {
  const user = props.user ? props.user.user : null;
  console.log(user);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  return (
    <Container className="Main">
      <Container className="Settings">
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Interface
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            Theme:
            <Dropdown placeholder="Theme" fluid selection options={themes} />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            User
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            RSS Reader
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Clock
          </Accordion.Title>
        </Accordion>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  // TODO: save settings
  POST_NOTIFICATION: actionCreators.POST_NOTIFICATION,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
