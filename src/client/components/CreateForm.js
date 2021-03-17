import PropTypes from "prop-types";
import React from "react";

import { Button, Input, Wrapper } from "../styles";

function CreateForm(props) {
  const { handleChange, handleSubmit, name } = props;

  return (
    <Wrapper>
      <label htmlFor="name">
        Name
        <Input onChange={handleChange} name="name" placeholder="Name" type="text" value={name} />
      </label>
      <Button onClick={handleSubmit} type="button">CREATE GAME</Button>
    </Wrapper>
  );
}

CreateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateForm;
