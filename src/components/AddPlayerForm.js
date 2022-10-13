import { useState } from "react";

const AddPlayerForm = (props) => {
  const [name, set_name] = useState("");

  return (
    <div className="AddPlayerForm">
      <h3>New player: </h3>
      <p className="flex-row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            // console.log("new input .value:", event.target.value);
            set_name(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
            set_name("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};

export default AddPlayerForm;
