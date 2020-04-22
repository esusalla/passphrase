import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/join">JOIN GAME</Link>
      <br />
      <Link to="/create">CREATE GAME</Link>
    </div>
  );
}

export default Home;
