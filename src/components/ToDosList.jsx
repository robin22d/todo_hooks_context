import React, { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";
import ToDoListItem from "./ToDoListItem";

const ToDosList = () => {
  const { toDos } = useContext(ToDosContext);

  return toDos.length ? (
    <div className="toDo-list">
      <ul>
        {toDos.map(toDo => (
          <ToDoListItem toDo={toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no To Dos</div>
  );
};

export default ToDosList;
