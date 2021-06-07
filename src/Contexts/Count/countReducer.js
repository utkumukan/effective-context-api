import produce from "immer";

export const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "increment": {
        draft.count = action.payload;
        break;
      }
      case "decrement": {
        draft.count = action.payload;
        break;
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  });

export default countReducer;
