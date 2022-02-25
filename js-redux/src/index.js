import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const countModifier = (state = 0, action) => {
  console.log(state)
  console.log(action)
  return "hello";
};

const countStore = createStore(countModifier);

countStore.dispatch({type:"asdf", payload:"3"});

console.log(countStore.getState());