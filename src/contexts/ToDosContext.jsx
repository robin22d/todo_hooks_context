import React, { createContext, useReducer, useEffect } from "react";

import { toDosReducer } from "../reducers/toDosReducers";

export const ToDosContext = createContext();

const ToDosContextProvider = props => {
  const [toDos, toDosDispatch] = useReducer(toDosReducer, [], () => {
    const localData = localStorage.getItem("toDos");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDosContext.Provider value={{ toDos, toDosDispatch }}>
      {props.children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
