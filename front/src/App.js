import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

import Main from "./components/Main";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Settings from "./components/Settings";

// TODO: Clock, notes, rss reader
const App = (props) => {
  const [theme, setTheme] = useState("light-mode");
  const settings = props.user ? props.user.settings : null;

  useEffect(() => {
    if (settings) setTheme(settings.interface.theme);
  }, [props.user]); // eslint-disable-line

  return (
    <div className={`canvas ${theme}`}>
      <Router>
        <Menu />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user ? state.user.user : null };
};

export default connect(mapStateToProps)(App);
