import uuid from "uuid/v1";

export const toDosReducer = (state, actions) => {
  switch (actions.type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: uuid(),
          title: actions.toDo.title,
          done: false
        }
      ];
    case "DELETE_TODO":
      return state.filter(toDos => toDos.id !== actions.todo.id);
    case "TODO_DONE":
      return state.map(toDo =>
        toDo.id === actions.todo.id ? (toDo.done = true) : toDo
      );
    case "EDIT_TODO":
      return state.map(toDo =>
        toDo.id === actions.todo.id ? actions.todo : toDo
      );
    default:
      console.log("No such actions");
      return;
  }
};
