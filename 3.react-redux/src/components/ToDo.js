import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

// 삭제의 경우, id만 신경쓰면 되므로, 이 부분에는 dispatch로 충분함 ㅋ
// 나 자신의 id가 필요하므로, ownProps 사용
function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  // 해당 컴포넌트의 props에 onBtnClick 힘수를 집어넣음.
  // 해당 함수는, dispatch를 하는데,
  // actionCreators.deleteToDo(ownProps.id)를 갖고 dispatch함
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
