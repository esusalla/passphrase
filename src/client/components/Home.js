import PropTypes from 'prop-types';
import React from 'react';

function Home(props) {
  const { handleViewChange } = props;
  return (
    <div>
      <button onClick={handleViewChange} type="button" value="join">JOIN GAME</button>
      <br />
      <button onClick={handleViewChange} type="button" value="create">CREATE GAME</button>
    </div>
  );
}

Home.propTypes = {
  handleViewChange: PropTypes.func.isRequired,
}

export default Home;
