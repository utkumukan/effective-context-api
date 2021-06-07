import * as React from "react";
import useCount from "../../Contexts/Count/useCount";

const CountDisplay = () => {
  const {
    state: { count }
  } = useCount();

  return <div>{`The current count is ${count}`}</div>;
};

export default CountDisplay;
