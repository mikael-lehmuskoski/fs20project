import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./components/Main";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Settings from "./components/Settings";

const App = (props) => {
  const settings = props.user ? props.user.settings : null;
  const [theme, setTheme] = useState(
    settings ? settings.interface.theme : false || "light-mode"
  ); // check settings, default to light-mode

  useEffect(() => {
    if (settings && theme !== settings.interface.theme)
      setTheme(settings.interface.theme);
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
