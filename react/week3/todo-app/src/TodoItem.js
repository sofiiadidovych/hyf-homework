import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import { useState } from "react";

function TodoItem({ id, description, deadline, onDelete, onUpdate }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const check = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={isChecked ? "checked" : "not-ckecked"}>
      {isEdit ? (
        <input
          type="text"
          value={updatedDescription}
          onChange={(event) => {
            const value = event.target.value;
            setUpdatedDescription(value);
          }}
        />
      ) : (
        <span>
          #{id} | {description} | {deadline}
        </span>
      )}

      <input type="checkbox" onChange={check} checked={isChecked} />
      <button onClick={() => onDelete(id)}>Delete</button>

      {isEdit ? (
        <button
          onClick={() => {
            onUpdate(id, updatedDescription);
            setIsEdit(false);
          }}
        >
          Update
        </button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
