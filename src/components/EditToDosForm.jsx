import React, { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";

const EditToDosForm = () => {
  const { dispatch } = useContext(FormContext);

  const [toDo, updateToDo] = useState("");

  useEffect(
    () => {
      updateToDo(props.currentToDo)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...toDo, [name]: value })
  }

  return (
    <>
      <h1> Edit To Do</h1>
      <form onSubmit={toDosDispatch("EDIT_TODO", toDo)}>
        <input
          type="text"
          placeholder="To Dos"
          value={toDo.title}
          onChange={handleInputChange}
          required
        />
        <input type="submit" value="Add To Do" />
        <button onclick={} value="Cancel" />
      </form>
    </>
  );
};

export default EditToDosForm;
