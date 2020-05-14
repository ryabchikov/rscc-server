import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Satellites from './satellites/pages/Satellites';
import NewSatellite from './satellites/pages/NewSatellite';
import NewBeam from './satellites/pages/NewBeam';
import Ships from './ships/pages/Ships';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainPage from './shared/components/UIElements/MainPage';

import './App.css';

function App() {
  return (
    <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/satellites" exact>
          <Satellites />
        </Route>
        <Route path="/satellites/add/" exact>
          <NewSatellite />
        </Route>
        <Route path="/beams/add/" exact>
          <NewBeam />
        </Route>
        <Route path="/ships" exact>
          <Ships />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
