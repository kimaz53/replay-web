import "./App.css";

import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Artist } from "./components/Dashboard/Artist";
import { Songs } from "./components/Dashboard/Songs";
import { Playlist } from "./components/Dashboard/Playlist";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/artist" component={Artist} />
          <Route exact path="/songs" component={Songs}/>
          <Route exact path="/playlist" component={Playlist}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
