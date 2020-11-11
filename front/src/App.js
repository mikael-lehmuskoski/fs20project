import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Footer from "./components/footer";
import Menu from "./components/menu";
import About from "./components/about";
import Doorway from "./views/login/Doorway";

// TODO: add services/apollo client and redux
const App = () => {
  return (
    <Container textAlign="center">
      <Router>
        <Menu />
        <Switch>
          <Route path="/login">
            <Doorway />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">main</Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
