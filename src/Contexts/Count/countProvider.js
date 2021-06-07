import React from "react";
import CountContext from "./countContext";
import countReducer from "./countReducer";

const CountProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export default CountProvider;
