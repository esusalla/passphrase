import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import CreateFormContainer from '../containers/CreateFormContainer';
import JoinFormContainer from '../containers/JoinFormContainer';
import LobbyContainer from '../containers/LobbyContainer';
import SetupContainer from '../containers/SetupContainer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={JoinFormContainer} />
        <Route path="/create" component={CreateFormContainer} />
        <Route path="/lobby" component={LobbyContainer} />
        <Route path="/setup" component={SetupContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
