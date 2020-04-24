import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import CreateFormContainer from './CreateFormContainer';
import GameEndContainer from './GameEndContainer';
import JoinFormContainer from './JoinFormContainer';
import LobbyContainer from './LobbyContainer';
import RoundActiveContainer from './RoundActiveContainer';
import RoundStartContainer from './RoundStartContainer';
import SetupContainer from './SetupContainer';

function App() {
  // Global state
  const hostName = useSelector(state => state.hostName);
  const name = useSelector(state => state.name);

  // Conditionally renders setup container based on whether player is host or not
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={JoinFormContainer} />
        <Route path="/create" component={CreateFormContainer} />
        <Route path="/setup" component={name === hostName ? SetupContainer : LobbyContainer} />
        <Route path="/round-start" component={RoundStartContainer} />
        <Route path="/round-active" component={RoundActiveContainer} />
        <Route path="/game-end" component={GameEndContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
