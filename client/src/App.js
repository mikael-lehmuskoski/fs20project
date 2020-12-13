import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./components/Main";
import Menu from "./components/menu";
import Settings from "./components/Settings";

import actionCreators from "./reducers";

const App = (props) => {
  const [theme, setTheme] = useState(props.user?.settings?.interface?.theme);

  useEffect(() => {
    props.GET_USER(props.token?.value);
  }, []); // eslint-disable-line

  useEffect(() => {
    setTheme(props.user?.settings?.interface?.theme);
  }, [props.user]); // eslint-disable-line

  console.log(props.token?.value);

  return (
    <div className={`canvas ${theme || "light-mode"}`}>
      <Router>
        <Menu />
        <Switch>
          {props.token?.value ? (
            <Route path="/settings">
              <Settings setTheme={setTheme} />
            </Route>
          ) : null}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user ? state.user.user : null,
    token: state.user ? state.user.token : null,
  };
};

const mapDispatchToProps = {
  GET_USER: actionCreators.GET_USER,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
