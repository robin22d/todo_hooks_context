import React, { useContext, useState } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

const AddToDosForm = () => {
  const { toDosDispatch } = useContext(ToDosContext);

  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    toDosDispatch({ type: "CREATE_TODO", toDo: { title } });
    setTitle("");
  };

  return (
    <>
      <h1 className="form-header"> Create ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To Dos"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input type="submit" value="Add To Do" />
      </form>
    </>
  );
};

export default AddToDosForm;
