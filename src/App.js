import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrawManager from "./DrawManager";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={DrawManager}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
