import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { connectSocket } from "../../shared/actions";
import { baseUrl, gameStages, nameLengthLimit } from "../../shared/constants";
import CreateForm from "../components/CreateForm";

function CreateFormContainer() {
  // Global state
  const gameStage = useSelector((state) => state.gameStage);

  // Local state
  const [name, setName] = useState("");

  // Global state changes
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (name) {
      const url = `ws://${baseUrl}/create?name=${name}`;
      dispatch(connectSocket(url));
    }
  };

  // Local state changes
  const handleChange = (event) => { if (event.target.value.length <= nameLengthLimit) setName(event.target.value); };

  if (gameStage === gameStages.SETUP) return <Redirect to="/setup" />;
  return (
    <CreateForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name}
    />
  );
}

export default CreateFormContainer;
