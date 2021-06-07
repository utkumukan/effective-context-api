import * as React from "react";
import useCount from "../../Contexts/Count/useCount";
import { decrement, increment } from "../../Contexts/Count/countActions";

const Counter = () => {
  const {
    state: { count },
    dispatch
  } = useCount();
  return (
    <div>
      <button onClick={() => dispatch(increment(count + 1))}>
        Increment count
      </button>
      <button onClick={() => dispatch(decrement(count - 1))}>
        Decrement count
      </button>
    </div>
  );
};

export default Counter;
