import { configure } from "@testing-library/react";
import React from "react";

const initialState = {
  count: 0,
  showCount: false,
};
function onsubAction(state) {
  return { ...state, count: state.count - 1 };
}
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case "reset":
      return {
        ...state,
        count: 0,
      };
      break;
    case "show":
      return {
        ...state,
        showCount: !state.showCount,
      };
    case "sub":
      return onsubAction(state);
    default:
      return state;
  }
}
const UseReducerHook = () => {
  console.log("re-render");

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <div>userReducerHook</div>
      <div>
        {state.showCount && <h1>count : {state.count}</h1>}
        <button
          className="yellow-button pad mar"
          onClick={() => {
            dispatch({ type: "add" });
          }}
        >
          increase counter
        </button>
        <button
          className="yellow-button pad mar"
          onClick={() => {
            dispatch({ type: "sub" });
          }}
        >
          decrease counter
        </button>
        <button
          className="yellow-button pad mar"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset counter
        </button>
        <button
          className="yellow-button pad mar"
          onClick={() => {
            dispatch({ type: "show" });
          }}
        >
          show counter
        </button>
      </div>
    </>
  );
};

export default UseReducerHook;
