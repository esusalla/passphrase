import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Home from './Home';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={CreateRoom} />
      <Route path="/join" component={JoinRoom} />
    </Switch>
  </BrowserRouter>
);

export default App;
