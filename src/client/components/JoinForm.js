import PropTypes from "prop-types";
import React from "react";

import { Button, Input, Wrapper } from "../styles";

function JoinForm(props) {
  const { gameCode, handleChange, handleSubmit, name } = props;

  return (
    <Wrapper>
      <label htmlFor="name">
        Name
        <Input onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <label htmlFor="gameCode">
        Game Code
        <Input onChange={handleChange} name="gameCode" placeholder="Game Code" type="text" value={gameCode} />
      </label>
      <Button onClick={handleSubmit} type="button">JOIN GAME</Button>
    </Wrapper>
  );
}

JoinForm.propTypes = {
  gameCode: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default JoinForm;
