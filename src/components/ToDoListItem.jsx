import React, { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

const ToDoListItem = ({ toDo }) => {
  const { toDosDispatch } = useContext(ToDosContext);
  const doneStyle = toDo.done
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <li className="title" style={doneStyle}>
      {toDo.title}
      <div className="actions">
        <button
          onClick={() =>
            toDosDispatch({ type: "TODO_DONE", todo: { id: toDo.id } })
          }
        >
          Done
        </button>
        <button>Edit</button>
        <button
          onClick={() =>
            toDosDispatch({ type: "DELETE_TODO", todo: { id: toDo.id } })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoListItem;
