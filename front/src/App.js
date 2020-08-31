import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Footer from "./components/footer";
import Menu from "./components/menu";
import About from "./components/about";

import { login } from "./services/loginService";

// TODO: add services/apollo client and redux
function App() {
  return (
    <Container textAlign="center">
      <Router>
        <Menu />
        <Switch>
          <Route path="/ebin">ebin:D</Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            main
            <br />
            <button type="button" onClick={() => login("asdd", "asddd")}>
              asd
            </button>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
