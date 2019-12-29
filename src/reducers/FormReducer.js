import uuid from "uuid/v1";

export const FormReducer = (state, actions) => {
  switch (actions.type) {
    case "CURRENT_TODO":
      return (state = actions.toDo);
    case "RESET_TODO":
      return (state = {});
    default:
      console.log("No such actions");
      return;
  }
};
