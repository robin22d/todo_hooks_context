import React from "react";
import ToDoContextProvider from "./contexts/ToDosContext";
import FormContextProvider from "./contexts/FormContext";
import Header from "./components/Header";
import ToDosList from "./components/ToDosList";
import AddToDosForm from "./components/AddToDosForm";

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <Header />
        <FormContextProvider>
          <AddToDosForm />
          <ToDosList />
        </FormContextProvider>
      </ToDoContextProvider>
    </div>
  );
}

export default App;
