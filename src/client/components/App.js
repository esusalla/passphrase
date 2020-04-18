import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import CreateFormContainer from '../containers/CreateFormContainer';
import JoinFormContainer from '../containers/JoinFormContainer';
import LobbyContainer from '../containers/LobbyContainer';
import SetupContainer from '../containers/SetupContainer';
import RoundStartContainer from '../containers/RoundStartContainer';
import RoundActiveContainer from '../containers/RoundActiveContainer';
import GameEndContainer from '../containers/GameEndContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={JoinFormContainer} />
        <Route path="/create" component={CreateFormContainer} />
        <Route path="/lobby" component={LobbyContainer} />
        <Route path="/setup" component={SetupContainer} />
        <Route path="/round-start" component={RoundStartContainer} />
        <Route path="/round-active" component={RoundActiveContainer} />
        <Route path="/end" component={GameEndContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
