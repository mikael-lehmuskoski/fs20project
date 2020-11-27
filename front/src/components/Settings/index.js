import React, { useState } from "react";
import { Container, Accordion, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import Theme from "./themes";
import actionCreators from "../../reducers";

const init = {
  user: null,
  interface: JSON.stringify({ theme: "asd" }),
  rss: null,
  clock: null,
  notes: null,
};

// TODO: separate Accordion.content into own components, save settings
const Settings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  /* const user = props.user ? props.user.user : null;
  const [localSettings, setLocalSettings] = useState(
    user ? user.settings : null
  ); */
  const [localSettings, setLocalSettings] = useState(init);
  const user = true;
  if (!user) return <div className="Main"><Container style={{ marginTop: "10px" }}>You need to log in to edit settings.</Container></div>; // eslint-disable-line

  const handleChange = (props) => {
    const subset = JSON.parse(localSettings[props.subset]);
    subset[props.key] = props.value;
    setLocalSettings((prev) => {
      return { ...prev, [props.subset]: JSON.stringify({ ...subset }) };
    });
    console.log(localSettings);
  };

  const handleSave = () => {
    console.log("saving!: ", localSettings);
  };

  return (
    <Container className="Main">
      <Container>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={() => setActiveIndex(0)}
          >
            <Icon name="dropdown" />
            Interface
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Theme handleChange={handleChange} />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={() => setActiveIndex(1)}
          >
            <Icon name="dropdown" />
            User
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={() => setActiveIndex(2)}
          >
            <Icon name="dropdown" />
            RSS Reader
          </Accordion.Title>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={() => setActiveIndex(3)}
          >
            <Icon name="dropdown" />
            Clock
          </Accordion.Title>
        </Accordion>
        <Button
          content="Save settings"
          onClick={() => handleSave()}
          style={{ marginTop: "10px" }}
        />
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
