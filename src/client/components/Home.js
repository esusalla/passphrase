import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/join">Join Game</Link>
      <br />
      <Link to="/create">Create Game</Link>
    </div>
  );
}

export default Home;
