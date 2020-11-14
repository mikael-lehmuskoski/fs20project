import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Footer from "./components/footer";
import Menu from "./components/menu";
import About from "./components/about";
import LoginSignup from "./LoginSignup";

// TODO: add services/apollo client and redux
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
          <Route path="/">main</Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
