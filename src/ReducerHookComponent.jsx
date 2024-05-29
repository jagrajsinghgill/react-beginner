import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      if (action?.payload?.value) {
        return action.payload.value;
      }
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.RESET:
      return 0;
    default:
      return count;
  }
}

export function ReducerHookComponent() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.INCREMENT, payload: { value: count + 5 } })
        }
      >
        +5
      </button>
    </>
  );
}
