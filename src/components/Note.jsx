import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handelEdit() {
    props.onEdit(props.note);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handelEdit}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
