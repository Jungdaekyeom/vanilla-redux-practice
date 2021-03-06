import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

// storeSubscribe part
// ===============================
const getState = () => {
  number.innerText = countStore.getState();
  return console.log(countStore.getState());
};

const onChange = () => {
  return getState;
};

countStore.subscribe(onChange());
// ===============================

const handleAdd = () =>
  countStore.dispatch({
    type: ADD,
  });

const handleMinus = () =>
  countStore.dispatch({
    type: MINUS,
  });

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
