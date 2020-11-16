/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import Footer from "./components/footer";
import Menu from "./components/menu";
import About from "./components/about";
import Settings from "./components/settings";
import LoginSignup from "./components/LoginSignup";

// TODO: Clock, notes, rss reader
const App = () => {
  return (
    <Container>
      <Router>
        <Menu />
        <Switch>
          <Route path="/login">
            <LoginSignup />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">main</Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
