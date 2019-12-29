import React, { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

const Header = () => {
  const { toDos } = useContext(ToDosContext);

  return (
    <div className="header">
      <h1> To Dos List </h1>
      <p> You have {toDos.length} in your list. </p>
    </div>
  );
};

export default Header;
