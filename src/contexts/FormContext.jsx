import React, { createContext, useReducer, useEffect } from "react";

import { FormReducer } from "../reducers/FormReducer";

export const FormContext = createContext();

const FormContextProvider = props => {
  const [currentToDo, currentToDoDispatch] = useReducer(FormReducer, {});

  return (
    <FormContext.Provider value={{ currentToDo, currentToDoDispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
