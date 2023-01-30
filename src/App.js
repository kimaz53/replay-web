import "./App.css";

import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import React from "react";
import { Artist } from "./components/Dashboard/Artist";
import { Songs } from "./components/Dashboard/Songs";
import { Playlist } from "./components/Dashboard/Playlist";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/artist" component={Artist} />
      <Route exact path="/songs" component={Songs} />
      <Route exact path="/playlist" component={Playlist} />
    </div>
  );
}

export default App;
