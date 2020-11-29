import React, { useEffect, useState } from "react";
import { Container, Accordion, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import Theme from "./themes";
import actionCreators from "../../reducers";

// TODO: rest of the stuff
const Settings = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [localSettings, setLocalSettings] = useState(null);

  useEffect(() => {
    setLocalSettings(props.user ? props.user.settings : null);
  }, [props.user]); // eslint-disable-line

  if (!localSettings) return <div className="Main"><Container style={{ marginTop: "10px" }}>You need to log in to edit settings.</Container></div>; // eslint-disable-line

  /**
   * Updates state when a change happens
   *
   * @param {String} subset the subset of settings about to be changed
   * @param {String} key the key under subset of settings about to be changed
   * @param {String} value value of subset[key] about to be changed
   *
   * @example
   * // sets key {Session} of subset {User} to value of {Persist}
   * handleChange("User","Session","Persist")
   */
  const handleChange = ({ subset, key, value }) => {
    // todo: validate value
    if (subset in localSettings && key in localSettings[subset]) {
      setLocalSettings((prev) => ({
        ...prev,
        [subset]: { ...prev[subset], [key]: value },
      }));
    }
  };

  const handleSave = async () => {
    try {
      if (!props.token && !props.token.value) throw new Error("No token!");
      const result = await props.SAVE_SETTINGS(
        { settings: localSettings },
        props.token.value
      );
      if (!result || !result.updateSettings || result.message)
        throw new Error(result.message || "Compurnal error");
      else props.POST_NOTIFICATION("Settings saved", 3, false);
    } catch (err) {
      props.POST_NOTIFICATION(err.message, 3, true);
    }
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
            <Theme
              handleChange={handleChange}
              init={localSettings.interface.theme}
            />
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={() => setActiveIndex(1)}
          >
            <Icon name="dropdown" />
            User
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            user stuff
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={() => setActiveIndex(2)}
          >
            <Icon name="dropdown" />
            RSS Reader
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            rss stuff
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={() => setActiveIndex(3)}
          >
            <Icon name="dropdown" />
            Clock
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            clock stuff
          </Accordion.Content>
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
  return {
    user: state.user ? state.user.user : null,
    token: state.user ? state.user.token : null,
  };
};

const mapDispatchToProps = {
  SAVE_SETTINGS: actionCreators.SAVE_SETTINGS,
  POST_NOTIFICATION: actionCreators.POST_NOTIFICATION,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
