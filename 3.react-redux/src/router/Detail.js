import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// detail page
function Detail({ toDos }) {
  const id = useParams();

  const thisComponentId = toDos.find((toDo) => toDo.id === parseInt(id.id));

  console.log(thisComponentId);

  return (
    <div>
      <h1>Detail</h1>
      <ul>
        <li>text : {thisComponentId.text}</li>
        <li>id : {thisComponentId.id}</li>
      </ul>
    </div>
  );
}

// get
const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps, null)(Detail);
