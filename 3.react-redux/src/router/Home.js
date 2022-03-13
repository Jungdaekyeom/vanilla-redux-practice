import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

// Home component props need inHomeFunctionAddToDo
// inHomeFunctionAddTodo in props 
function Home({ toDos, inHomeFunctionAddTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    inHomeFunctionAddTodo(text);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

// state = store의 state
// ownProps = 현재 컴포넌트의 props
// mapStateToProps : store로부터 state를 가지고 와서, ownProps에 추가함

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 1. inHomeFunctionAddTodo is require text string
    // 2. addTodo does call dispatch
    // 3. dispatch will call actionCreators.storeAddTodo(text)

    // mapDispatchToProps안에 함수를 하나 만든다.
    // 함수의 이름은 inHomeFuctionAddTodo고, argument는 text이다
    // 그 후, actionCreators.storeAddToDo(text)와 함께 dispatch를 호출
    inHomeFunctionAddTodo: (text) =>
      dispatch(add(text)),
  };
};

// connect는 store로부터 각 component를 연결해주는 역할을 한다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
