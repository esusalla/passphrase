import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/create">Create Room</Link>
    <br />
    <Link to="/join">Join Room</Link>
  </div>
);

export default Home;
