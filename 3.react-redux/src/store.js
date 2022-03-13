import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// basic action

// const storeAddToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
const storeAddToDo = createAction("ADD");

// // action
// const storeDeleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const storeDeleteToDo = createAction("DELETE");

// basic reducer(state, action)

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case storeAddToDo().type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case storeDeleteToDo().type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 위와 아래는 같음
// switch 없이 구현 가능한 createReducer

// 리덕스 툴킷이 아이머(immer)를 활용해 자동으로 mutate를 해줌
// 그러니 push를 사용해도 괜찮음!!

// you need to ensure that you either mutate the state argument or return a new state, but not both
// createReducer는 너에게 두 가지 option을 준다.
// 1. mutate(복제) : state를 mutate로 쓸 수 있다.
// (immer에서 작동하기 때문에, 자동으로 리덕스 툴킷이 자동으로 해당 정보를 가져가 return 처럼 처리해줌)
// 2. return 의 사용(복제가 아닌, 새로 생성하는 것)

// const reducer = createReducer([], {
//   [storeAddToDo]: (state, action) => {
//     // return [{ text: action.payload, id: Date.now() }, ...state];
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [storeDeleteToDo]: (state, action) => {
//     // filter는 mutate하지 않음
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});
// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.reducer)

// actionCreators로 묶고, export시킴
// export const actionCreators = {
//   storeAddToDo,
//   storeDeleteToDo,
// };

export const {add, remove} = toDos.actions;

// createStore 자체를 export 시킴
export default store;
