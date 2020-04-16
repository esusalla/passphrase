import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import GameCreateContainer from '../containers/GameCreateContainer';
import GameJoinContainer from '../containers/GameJoinContainer';
import GameLobbyContainer from '../containers/GameLobbyContainer';
import GameSetupContainer from '../containers/GameSetupContainer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={GameJoinContainer} />
        <Route path="/create" component={GameCreateContainer} />
        <Route path="/lobby" component={GameLobbyContainer} />
        <Route path="/setup" component={GameSetupContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
