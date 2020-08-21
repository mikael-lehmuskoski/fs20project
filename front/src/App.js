import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer";
import Menu from "./components/menu";
import About from "./components/about";

// TODO: add services/apollo client and redux
function App() {
  return (
    <Router>
      <h1>Bulletin</h1>
      <Menu />
      <Switch>
        <Route path="/ebin">ebin:D</Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
